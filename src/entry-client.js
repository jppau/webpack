/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 17:24:00
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 17:24:07
 * @FilePath: /webpack/vue全栈开发/src/entry-client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createSSRApp } from "vue";
import App from "./App.vue";

createSSRApp(App).mount("#app");
