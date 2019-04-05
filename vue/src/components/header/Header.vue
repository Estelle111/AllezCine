<template>
    <div id="header">
        <div id="nav">
            <!-- liens comme <a></a> pour rediriger sur la bonne page. via le router -->
            <router-link to="/" id="BarMot">Home</router-link> 
            <router-link to="/Films" id="BarMot">Films</router-link>
            <router-link to="/Series" id="BarMot">Series</router-link>
        </div>
        <Recherche/>
        <div id="headeroussel">
            <CarouselView/>
        </div>    
    </div>
</template>

<script>

import CarouselView from '../carousel/CarouselView.vue'
//import du component Recherche
import Recherche from '../recherche/Recherche.vue'

export default {
  name: 'Header',

  components: {
    CarouselView,
    Recherche
  }
}
</script>


<style>
#header {
background-color:yellow;
  width : 90% ; 
  margin : auto ;
  font-size: 20px;
}
#nav {
  
  float : left ; 
  margin:0 10px; 
  
}
#headeroussel {
  
  color : blue ;
  
}
#BarMot {
  padding :0, 20px ; 
}
</style>
