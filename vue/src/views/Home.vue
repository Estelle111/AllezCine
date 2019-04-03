<template>
  <div class="home">
    <div>
        <Title :text="'Films'"/>
        <ImgFilm/>
        <button></button>
    </div>
    <div>
        <Title :text="'Séries TV'"/>
        <ImgSerie/>
    </div>
  </div>
</template>

<script>
import Title from '../components/title/Title.vue'
import ImgFilm from '../components/imgFilm/ImgFilm.vue'
import ImgSerie from '../components/imgSerie/ImgSerie.vue'

export default {
  name : 'Home',
  components:{
    Title,
    ImgFilm,
    ImgSerie
  },
}

</script>

<style>
  .home {
    background-color: pink;
  }
</style>
