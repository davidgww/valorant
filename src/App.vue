<template>
  <div id="app">
    <Header></Header>
    <router-view v-wechat-title='$route.meta.title'></router-view>
    <Foot></Foot>
  </div>
</template>
<script>
import Header from '@/components/global/header.vue'
import Foot from '@/components/global/footer.vue'
import Home from '@/views/home/Home.vue'
export default {
  name: 'App',
  components:{
    Home,
    Header,
    Foot
  }
}
</script>
<style>
@import 'assets/css/base.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
