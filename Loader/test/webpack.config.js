/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-22 16:07:10
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-22 16:14:20
 * @FilePath: /webpack/Loader/test/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: path.resolve(__dirname, "../dist/index.js") }],
      },
    ],
  },
};
