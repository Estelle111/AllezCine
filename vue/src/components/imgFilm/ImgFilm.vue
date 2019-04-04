<template>
    <div class="imgFilm">
      <div class="filmImg"></div>
      <div class="filmTitle">{{ info }}</div>
      <div class="filmDate"></div>
    </div>
    

</template>

<script>
import { axios } from '../../axios'

export default {
  name: 'ImgFilm',
  data(){
    return{
        info: null,
        loading: true,
        errored: false
      }
  },
  mounted () {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)    
  }
}
</script>

<style>
</style>