/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 17:24:23
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 17:43:50
 * @FilePath: /webpack/vue全栈开发/src/entry-server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createSSRApp } from "vue";
import App from "./App.vue";

export default () => {
  return createSSRApp(App);
};
