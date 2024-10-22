/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-22 16:01:18
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-22 16:02:08
 * @FilePath: /webpack/Loader/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { validate } from 'schema-utils';
import schema from './options.json';

export default function loader(source) {
  const { version, webpack } = this;
  // 获取Loader配置项
  const options = this.getOptions();

  // 校验Loader配置是否符合预期
  validate(schema, options, 'Loader');

  const newSource = `
  /**
   * Loader API Version: ${version}
   * Is this in 'webpack mode': ${webpack}
   */
  /**
   * Original Source From Loader
   */
  ${source}`;

  return newSource;
}