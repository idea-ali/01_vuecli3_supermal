<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

/* 
  暂停在 p155（p155没看），暂时不看了
  https://www.bilibili.com/video/BV15741177Eh?p=155&spm_id_from=pageDriver

*/
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import './assets/css/base.css';

</style>
