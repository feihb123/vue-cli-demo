<template>
  <div id="app">
    <navigation></navigation>
    <!-- <index></index> -->
    <router-view></router-view>
  </div>
</template>

<script>
import index from './views/index.vue'
import Navigation from './components/consumer/nav/navigation'
import router from './router'

export default {
  name: 'app',
  components: {
    index,Navigation
  },
  router,

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
