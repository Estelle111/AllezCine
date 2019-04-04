<template>
    
</template>

<script>
export default {
  name: 'ImgSerie',
  data () {
    return {
      serieTitle: null
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1')
      .then(response => (this.serieTitle = response))
  }
}
</script>

<style>
</style>