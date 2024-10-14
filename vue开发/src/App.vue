<!--
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 16:28:32
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 16:29:17
 * @FilePath: /webpack/vue开发/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello World" };
  },
};
</script>

<style>
body {
  background: #000;
}
h3 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>