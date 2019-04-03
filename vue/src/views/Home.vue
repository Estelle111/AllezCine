<template>
    <div class="home">
        <div>
            <div>
                <Title :text="'Films'"/>
            </div>
            <div>
                <ImgFilm/>
            </div>
            <div>
                <Btn :text="'more films'"></Btn>
            </div>
        </div>
        <div>
            <div>
                <Title :text="'TV Series'"/>
            </div>
            <div>
                <ImgSerie/>
            </div>
            <div>
                <Btn :text="'more series'"></Btn>
            </div>
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
