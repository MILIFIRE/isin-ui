// 导入必要的模块
import process from "node:process"; // 导入 Node.js 中的进程模块
import path from "node:path"; // 导入 Node.js 中的路径模块
import fs from "node:fs"; // 导入 Node.js 中的文件系统模块
import * as vueCompiler from "vue/compiler-sfc"; // 导入 Vue 单文件组件编译器
import glob from "fast-glob"; // 导入用于匹配文件路径的模块
import { Project } from "ts-morph"; // 导入 TypeScript AST 操作库中的项目对象
import type { CompilerOptions, SourceFile } from "ts-morph"; // 导入 TypeScript AST 操作库中的编译选项和源文件类型
import { resolvePath } from "./utils"; // 导入自定义工具函数，用于解析路径

// 获取 tsconfig.build.json 文件路径
const tsWebBuildConfigPath = resolvePath("tsconfig.build.json");

// 检查项目的类型是否正确
function checkPackageType(project: Project) {
  // 获取项目的预发射诊断信息
  const diagnostics = project.getPreEmitDiagnostics();
  // 如果存在诊断信息，则打印诊断信息并抛出错误
  if (diagnostics.length > 0) {
    console.error(project.formatDiagnosticsWithColorAndContext(diagnostics)); // 打印带颜色和上下文的诊断信息
    const err = new Error("TypeScript 类型描述文件构建失败！"); // 创建错误对象
    console.error(err); // 打印错误信息
    throw err; // 抛出错误
  }
}

// 将*.d.ts文件复制到指定格式模块目录里
async function copyDts() {
  // 获取指定目录下的所有 .d.ts 文件路径
  const dtsPaths = await glob(["**/*.d.ts"], {
    cwd: resolvePath("dist", "types", "src"), // 指定搜索的目录
    absolute: false, // 返回相对路径
    onlyFiles: true, // 仅匹配文件
  });

  // 遍历所有 .d.ts 文件路径
  dtsPaths.forEach((dts: string) => {
    // 获取源 .d.ts 文件路径
    const dtsPath = resolvePath("dist", "types", "src", dts);
    // 获取目标 CommonJS 格式的 .d.ts 文件路径
    const cjsPath = resolvePath("dist", "cjs", dts);
    // 获取目标 ESM 格式的 .d.ts 文件路径
    const esmPath = resolvePath("dist", "esm", dts);
    // 读取源 .d.ts 文件内容
    const content = fs.readFileSync(dtsPath, { encoding: "utf8" });
    // 将内容分别写入目标 CommonJS 和 ESM 格式的 .d.ts 文件中
    fs.writeFileSync(cjsPath, content); // 写入 CommonJS 格式的 .d.ts 文件
    fs.writeFileSync(esmPath, content); // 写入 ESM 格式的 .d.ts 文件
  });
}

// 添加源文件到项目里
async function addSourceFiles(project: Project, pkgSrcDir: string) {
  // 添加 vite-env.d.ts 文件到项目中
  project.addSourceFileAtPath(resolvePath("vite-env.d.ts"));

  // 定义匹配的源文件类型
  const globSourceFile = "**/*.{js?(x),ts?(x),vue}";
  // 获取匹配的源文件路径
  const filePaths = await glob([globSourceFile], {
    cwd: pkgSrcDir, // 指定搜索的目录
    absolute: true, // 返回绝对路径
    onlyFiles: true, // 仅匹配文件
  });
  // 存储所有源文件的对象
  const sourceFiles: SourceFile[] = [];
  await Promise.all([
    ...filePaths.map(async (file) => {
      // 如果文件为 .vue 后缀
      if (file.endsWith(".vue")) {
        // 读取文件内容
        const content = fs.readFileSync(file, { encoding: "utf8" });
        // 检查是否包含 @ts-nocheck 注释
        const hasTsNoCheck = content.includes("@ts-nocheck");
        // 解析 Vue 单文件组件
        const sfc = vueCompiler.parse(content);

        const { script, scriptSetup } = sfc.descriptor;
        // 如果存在 script 或 scriptSetup
        if (script || scriptSetup) {
          // 构造内容
          let content =
            (hasTsNoCheck ? "// @ts-nocheck\n" : "") + (script?.content ?? "");

          // 如果存在 scriptSetup，则编译 scriptSetup 并加入内容
          if (scriptSetup) {
            console.log("scriptSetup:");

            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: "temp",
            });
            console.log("scriptlate:");

            content += compiled.content;
          }

          // 获取语言类型
          const lang = scriptSetup?.lang || script?.lang || "js";
          // 创建源文件对象
          const sourceFile = project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`, // 源文件路径
            content // 源文件内容
          );
          // 将源文件对象添加到数组中
          sourceFiles.push(sourceFile);
        }
      } else {
        // 如果文件不是 .vue 后缀，则直接添加源文件到项目中
        const sourceFile = project.addSourceFileAtPath(file);
        // 将源文件对象添加到数组中
        sourceFiles.push(sourceFile);
      }
    }),
  ]);

  // 返回所有源文件对象数组
  return sourceFiles;
}

// 生产 Typescript 类型描述文件
async function generateTypesDefinitions(
  pkgDir: string,
  pkgSrcDir: string,
  outDir: string
) {
  // 定义 TypeScript 编译选项
  const compilerOptions: CompilerOptions = {
    emitDeclarationOnly: true, // 仅生成 .d.ts 文件
    outDir, // 输出目录
  };
  // 创建 TypeScript 项目对象
  const project = new Project({
    compilerOptions, // 设置编译选项
    tsConfigFilePath: tsWebBuildConfigPath, // 设置 tsconfig.json 文件路径
  });

  // 添加源文件到项目中
  const sourceFiles = await addSourceFiles(project, pkgSrcDir);
  // 检查项目的类型是否正确
  checkPackageType(project);
  // 生成 TypeScript 类型描述文件
  await project.emit({
    emitOnlyDtsFiles: true, // 仅生成 .d.ts 文件
  });
  // 定义任务数组，用于处理每个源文件的输出
  const tasks = sourceFiles.map(async (sourceFile) => {
    // 获取源文件相对于包目录的路径
    const relativePath = path.relative(pkgDir, sourceFile.getFilePath());

    // 获取源文件的发射输出
    const emitOutput = sourceFile.getEmitOutput();
    const emitFiles = emitOutput.getOutputFiles();

    // 如果发射输出为空，则抛出异常
    if (emitFiles.length === 0) {
      throw new Error(`异常文件: ${relativePath}`);
    }

    // 处理每个输出文件
    const subTasks = emitFiles.map(async (outputFile) => {
      // 获取输出文件路径
      const filepath = outputFile.getFilePath();
      // 创建输出文件所在目录（递归创建）
      fs.mkdirSync(path.dirname(filepath), {
        recursive: true,
      });
    });

    // 执行所有子任务
    await Promise.all(subTasks);
  });

  // 等待所有任务完成
  await Promise.all(tasks);
}

// 构建函数，用于编译 TypeScript 类型描述文件和复制 .d.ts 文件
async function build() {
  // 定义输出目录、包目录和包源代码目录
  const outDir = resolvePath("dist", "types"); // 输出目录
  const pkgDir = resolvePath(); // 包目录
  const pkgSrcDir = resolvePath("src"); // 包源代码目录
  // 生成 TypeScript 类型描述文件
  await generateTypesDefinitions(pkgDir, pkgSrcDir, outDir);
  // 复制 .d.ts 文件到指定格式的模块目录
  await copyDts();
}

// 主流程开始，输出开始信息，然后执行构建
console.log("[Dts] 开始编译 d.ts 文件···"); // 输出开始编译信息
await build(); // 执行构建函数
console.log("[Dts] 编译 d.ts 文件成功！"); // 输出编译成功信息
