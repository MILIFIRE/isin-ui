import fs from 'node:fs';
import path from 'node:path';

// 获取根目录
export const resolvePath = (...args: string[]) => {
  return path.resolve(__dirname, '..', ...args);
};

// 写入文件
export const wirteFile = (file: string, text: string) => {
  const dir = path.dirname(file);
  if (!(fs.existsSync(dir) && fs.statSync(dir).isDirectory())) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(file, text);
};

