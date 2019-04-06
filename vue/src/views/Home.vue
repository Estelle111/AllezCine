<template>
    <div class="home">
        <div>
            <Title :text="'Films'"/>
			<div class="contents">
				<ApiMdb v-for="(film, index) in films" :key="index" :content="film"/>
			</div>
            <Btn :text="'more films'"></Btn>
        </div>
        <div>
            <Title :text="'TV Series'"/>
			<div class="contents">
            	<ApiMdb v-for="(serie, index) in tv" :key="index" :content="serie"/>
			</div>
            <Btn :text="'more series'"></Btn>
        </div>
    </div>
</template>

<script>
import {axios} from '../axios'
import Title from '../components/title/Title.vue'
import ApiMdb from '../components/apiMdb/ApiMdb.vue'
import Btn from '../components/btn/Btn.vue'

export default {
	name : 'Home',
	components:{
		Title,
		ApiMdb,
		Btn
	},
	data () {
		return {
			tv: null,
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
			this.films = response.data.results.slice(0, 12)
			console.log(this.films)
			})
			.catch(error => {
			console.log(error)
			this.errored = true
			})
			.finally(() => this.loading = false)    
		// get series api
		axios
			.get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
			.then(response => {
				this.tv = response.data.results.slice(0, 12)
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
	.home {
		background-color: pink;
	}
	.contents{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>
