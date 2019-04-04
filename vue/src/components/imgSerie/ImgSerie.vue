<template>
    <div class="imgSerie">
        <div class="serieImg"></div>
        <div class="serieTitle">{{info}}</div>
        <div class="serieDate"></div>
    </div>
</template>

<script>
import {axios} from '../../axios'

export default {
  name: 'ImgSerie',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
      .then(response => {
        console.log(response)
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