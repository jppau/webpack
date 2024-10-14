/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 16:29:26
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 16:31:32
 * @FilePath: /webpack/vue开发/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

