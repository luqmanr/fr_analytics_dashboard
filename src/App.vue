<template>
  <div id="app">
    <div class="row">
      <b-button variant="primary" v-b-toggle.sidebar-1 style="font-size:2em;" class="col-sm-1">☰ Menu</b-button>
      <h3 class="col-sm-10" style="margin: 0.5em 0em 0em 0em; text-align: right;">by Riset.ai</h3>
    </div>
    <b-sidebar id="sidebar-1" title="Navigations" bg-variant="dark" text-variant="light" shadow>
      <v-sidebar></v-sidebar>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>

import { bus } from '@/main'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    'v-sidebar': SideBar
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
