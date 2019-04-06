<template>
    <div class="films">
        <Title :text="'Top films'"/>
        <div class="contents">
        	<ApiMdb v-for="(film, index) in films" :key="index" :content="film"/>
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
	name : 'Films',
	components:{
		Title,
		ApiMdb,
		SocialNetwork,
	},
	data () {
		return {
			films: null,
			loading: true,
			errored: false
		}
	},
	mounted () {
	// get film api
		axios
			.get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
			.then(response => {
			this.films = response.data.results
			console.log(this.films)
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
	.films {
		background-color: orange;
	}
</style>
