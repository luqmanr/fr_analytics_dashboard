<template>
    <div>
      <h1 class='title row'>
        <span class='col-sm-12' style='text-align: right'>by Riset.ai</span>
      </h1>
  
      <nav>
        <ul class="row">
            All have access to these pages
            <!-- <router-link class='col-md-12' to="/" tag="button" exact>All Recognition Charts</router-link> -->
            <router-link class='col-md-12' to="/all_recog_charts" tag="button" exact>All Recognition Charts</router-link>
            <router-link class='col-md-12' to="/recog_log" tag="button" exact>Recognition Hits</router-link>
            <router-link class='col-md-12' to="/recog_errors_log" tag="button" exact>Recognition Errors</router-link>
            <!-- <router-link class='col-md-12' :to="{ path:'/absensi' }" tag="button" exact>Absensi</router-link> -->
            <!-- <router-link v-if="buttonView" class='col-md-12' to="/" tag="button" exact>Demo Graphs & Charts</router-link> -->
          </ul>
      </nav>
    </div>
  
  </template>
  
  <script>
  
  import { bus } from '../main';
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  
  Vue.use(VueRouter)
  
  export default {
    components: {
   
    },
    props: {
        buttonView: {
            default: false
        }
    },
    data() {
      return {
        title: 'Face Demo'
      }
    },
    methods: {
  
    },
    created() {
        
    },
    mounted() {
      // this.$router.push("/imagecapture_absensi")
    }
  }
  </script>
  
  <style scoped>
  
  .title {
    width: 100%;
    font-size: 2vh;
    padding-left: 1%;
    background: rgb(10,10,10);
    color: white;
    margin: 0px 0px 0px 0px;
  }
  
  .stripe {
    height: 1vh;
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
  
  nav {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
  
  li {
    font-size: 2vh;
  }
  
  button {
    font-size: 2vh;
    background-color: white;
    padding: 0vh 0vh 0vh 0vh;
  }
  
  </style>
  