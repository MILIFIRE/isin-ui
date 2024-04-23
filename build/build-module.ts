import fs from "node:fs";
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/dist/rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import glob from "fast-glob";
import type { OutputOptions } from "rollup";
import { resolvePath } from "./utils";

const getExternal = async () => {
  const pkgPath = resolvePath("package.json");
  const manifest = require(pkgPath) as any;
  const { dependencies = {}, devDependencies = {} } = manifest;
  const deps: string[] = [
    ...new Set([...Object.keys(dependencies), ...Object.keys(devDependencies)]),
  ];
  return (id: string) => {
    if (id.endsWith(".less")) {
      return true;
    }
    return deps.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
  };
};

const build = async () => {
  const pkgDistPath = resolvePath("dist");
  if (fs.existsSync(pkgDistPath) && fs.statSync(pkgDistPath).isDirectory()) {
    fs.rmSync(pkgDistPath, { recursive: true });
  }

  const input = await glob(["**/*.{js,jsx,ts,tsx,vue}", "!node_modules"], {
    cwd: resolvePath("src"),
    absolute: true,
    onlyFiles: true,
  });

  const bundle = await rollup({
    input,
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        betterDefine: false,
        plugins: {
          vue: vue({
            isProduction: true,
          }),
          vueJsx: vueJsx(),
        },
      }),
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: "es2015",
        loaders: {
          ".vue": "ts",
        },
      }),
    ],
    external: await getExternal(),
    treeshake: false,
  });

  const options: OutputOptions[] = [
    // CommonJS 模块格式的编译
    {
      format: "cjs",
      dir: resolvePath("dist", "cjs"),
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: resolvePath("src"),
      sourcemap: true,
      entryFileNames: "[name].cjs",
    },
    // ES Module 模块格式的编译
    {
      format: "esm",
      dir: resolvePath("dist", "esm"),
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: resolvePath("src"),
      sourcemap: true,
      entryFileNames: "[name].mjs",
    },
  ];
  return Promise.all(options.map((option) => bundle.write(option)));
};

console.log("[JS] 开始编译所有子模块···");
await build();
console.log("[JS] 编译所有子模块成功！");
