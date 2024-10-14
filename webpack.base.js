/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 17:21:35
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 17:21:43
 * @FilePath: /webpack/vue全栈开发/webpack.base.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".vue", ".js"],
  },
  module: {
    rules: [{ test: /.vue$/, use: "vue-loader" }],
  },
  plugins: [new VueLoaderPlugin()],
};

