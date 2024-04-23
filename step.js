// 导入 fs-extra 并设置为 ES 模块语法
import fs from 'fs-extra';

// 同步地复制文件
try {
  // 使用 fs-extra 的 copySync 方法来同步地复制文件
  fs.copySync('package_isin.json', 'dist/package.json');
  console.log('File copied successfully');
} catch (err) {
  console.error('Error copying file:', err);
}