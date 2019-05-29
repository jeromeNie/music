<template>
  <div id="app">
    <div class="content-box">
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  }
};
</script>

<style lang="stylus">
html, body {
  height: 100%;
}

#app {
  height: 100%;

  .content-box {
    position: relative;
    width: 100%;
    min-height: 2338px;
    box-sizing: border-box;
    padding-bottom: 185px;
    background: #eee;
  }
}
</style>
