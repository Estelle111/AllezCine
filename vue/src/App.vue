<template>
  <div id="app">
    <Header/>
    <router-view/> 
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


élément {

margin-top: 0px;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
body {
  margin :0 ; 
  
}

</style>
