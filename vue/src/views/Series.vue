<template>
    <div class="series">
        <Title :text="'Top series'"/>
        <div class="contents">
            <ApiMdb v-for="(serie, index) in tv" :key="index" :content="serie"/>
        </div>
        <SocialNetwork/>
    </div>
</template>

<script>
import {axios} from '../axios'
import Title from '../components/title/Title'
import ApiMdb from '../components/apiMdb/ApiMdb'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'

export default {
    name : 'Series',
    components:{
        Title,
        ApiMdb,
        SocialNetwork,
    },
    data () {
    return {
      tv: null,
      loading: true,
      errored: false
    }
  },
  mounted () {   
	// get series api
	axios
		.get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
		.then(response => {
			this.tv = response.data.results
			console.log(this.tv)
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
    .series {
    background-color: rgb(87, 255, 138);
    }
</style>