<template>
  <div id="app">
    <entete/>
    <router-view/>
    <pied/>
  </div>
</template>

<script>
import entete from './components/header/Header.vue'
import pied from './components/footer/Footer.vue'

export default {
  name : 'app',
  components:
    entete,
    pied,
  
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
