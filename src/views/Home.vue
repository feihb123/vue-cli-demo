<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello></hello>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import hello from '@/components/hello.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,hello
  }
}
</script>
