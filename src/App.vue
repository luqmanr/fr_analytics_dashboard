<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { bus } from '@/main';

export default {
  name: 'App',
  components: {

  },
  created() {
    document.title = "FR API Dashboard"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #ffffff; */
  background-color:#2c3e50;
  margin-top: 60px;
}
</style>
