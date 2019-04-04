<template>
    <div id="header">
        <div id="nav">
            <!-- liens comme <a></a> pour rediriger sur la bonne page. via le router -->
            <router-link to="/">Home</router-link> 
            <router-link to="/Films">Films</router-link>
            <router-link to="/Series">Series</router-link>
            <router-link to="/Descriptions">Descriptions</router-link>
        </div>
        <div>
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
}

</style>
