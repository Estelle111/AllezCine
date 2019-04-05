<template>
    <div class="imgFilm">
        <div v-for="(el, index) in moovie" :key="index">
            <div class="moovie">
                {{el.poster_path}}<br/>
                {{el.name}}<br/>
                {{el.first_air_date}}<br/>
            </div>
        </div>
    </div>
</template>

<script>
import { axios } from '../../axios'

export default {
  name: 'ImgFilm',
  data(){
    return{
        moovie: null,
        loading: true,
        errored: false
      }
  },
  mounted () {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
      .then(response => {
        this.moovie = response.data.results.slice(0, 4)
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