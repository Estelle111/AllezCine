<template>
  <div id="app">
    <Header/>
    <router-view/> 
    <h1>App</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name : 'app',
  components:{
    Header,
    Footer,
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
