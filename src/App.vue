<template>
  <div id="app">
    <!-- 路由那里按需引入就不用绑定了 -->
    <!-- <router-link to="/home">home</router-link> -->
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // app这里也一定要让引入组件啊
};
</script>
<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
}
</style>