<template>
  <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/Films">Films</router-link>
      <router-link to="/Series">Series</router-link>
      <router-link to="/Descriptions">Descriptions</router-link>
      <div>
        <CarouselView/>
      </div>    
  </div>
</template>

<script>
import CarouselView from '../carousel/CarouselView.vue'

export default {
  name: 'Header',

  components: {
    CarouselView,
  }
}
</script>


<style>

</style>
