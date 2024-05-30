import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';

/**
 * 書き出したindex.htmlにビルド日時を埋め込むためのプラグイン
 */
const writeBuiltTimePlugin = () => {
  const modifyPath = (path: string) =>
    path.replace(/^file:\/\//, '').replace(/\/timestampPlugin\.js$/, '');

  const path = dirname(import.meta.url) ?? '';
  const buildDir = resolve(modifyPath(path), 'dist');
  const indexPath = join(buildDir, 'index.html');

  const timestampJST = JSON.stringify(
    new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
  );
  const barStr = '-'.repeat(32);
  console.log(
    `${barStr}\n[WriteBuiltTimePlugin]\nBuild time: ${timestampJST}\nWrite to index.html✅\n${barStr}\n`
  );

  return {
    name: 'timestamp-plugin',
    closeBundle() {
      if (existsSync(indexPath)) {
        let htmlContent = readFileSync(indexPath, 'utf-8');
        htmlContent = htmlContent.replace(
          `<!DOCTYPE html>`,
          `<!-- Build time: ${timestampJST} -->\n<!DOCTYPE html>`
        );
        writeFileSync(indexPath, htmlContent);
      }
    },
  };
};

export default writeBuiltTimePlugin;
