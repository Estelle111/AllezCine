<template>
    <div class="imgSerie">
        <div>{{tv}}</div>
        <br/><br/><br/>
        <div v-for="(el, index) in tv" :key="index">
            <div class="tv">
                {{el.poster_path}}<br/>
                {{el.name}}<br/>
                {{el.first_air_date}}<br/>
            </div>
        </div>
    </div>
</template>

<script>
import {axios} from '../../axios'

export default {
  name: 'ImgSerie',
  data () {
    return {
      tv: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
      .then(response => {
        this.tv = response.data.results
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