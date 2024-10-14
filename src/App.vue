<!--
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-14 17:23:45
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-14 17:23:53
 * @FilePath: /webpack/vue全栈开发/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div :class="['main', cls]">
    <h3>{{ message }}</h3>
    <button @click="handleClick">Toggle</button>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";

export default {
  setup() {
    const isActivity = ref(false);
    const cls = computed(() => (isActivity.value ? "activate" : "deactivate"));
    const handleClick = () => {
      isActivity.value = !isActivity.value;
    };

    return {
      isActivity,
      message: "Hello World",
      cls,
      handleClick,
    };
  },
};
</script>

<style>
h3 {
  color: #42b983;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px 12px;
  transition: background 0.3s linear;
}
.activate {
  background: #000;
}
.deactivate {
  background: #fff;
}
</style>
