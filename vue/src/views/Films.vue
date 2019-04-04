<template>
    <div class="films">
        <Title :text="'Top films'"/>
        <ImgFilm/>
        <SocialNetwork/>
    </div>
</template>

<script>
import Title from '../components/title/Title'
import ImgFilm from '../components/imgFilm/ImgFilm'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'


export default {
  name : 'Films',
  components:{
    Title,
    ImgFilm,
    SocialNetwork,
  },
}
</script>

<style>
  .films {
    background-color: orange;
  }
</style>
