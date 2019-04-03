<template>
    <div class="home">
        <div>
            <Title :text="'Films'"/>
            <ImgFilm/>
            <Btn :text="'more films'"></Btn>
        </div>
        <div>
            <Title :text="'TV Series'"/>
            <ImgSerie/>
            <Btn :text="'more series'"></Btn>
        </div>
    </div>
</template>

<script>
import Title from '../components/title/Title.vue'
import ImgFilm from '../components/imgFilm/ImgFilm.vue'
import ImgSerie from '../components/imgSerie/ImgSerie.vue'
import Btn from '../components/btn/Btn.vue'

export default {
  name : 'Home',
  components:{
    Title,
    ImgFilm,
    ImgSerie,
    Btn
  },
}

</script>

<style>
  .home {
    background-color: pink;
  }
</style>
