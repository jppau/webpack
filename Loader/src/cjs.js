/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-22 16:01:14
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-22 16:05:50
 * @FilePath: /webpack/Loader/src/cjs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const loader = require('./index');

module.exports = loader.default;
module.exports.raw = loader.raw;