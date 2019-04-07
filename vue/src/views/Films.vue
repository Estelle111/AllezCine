<template>
    <div class="films">
        <Title class="FilmsTitle" :text="'Top films'"/>
        <div class="contents">
        	<ApiMdb v-for="(film1, index) in films1" :key="index" :content="film1"/>
        	<ApiMdb v-for="(film2, index) in films2" :key="index" :content="film2"/>
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
			films1: null,
			films2: null,
			loading: true,
			errored: false
		}
	},
	mounted () {
	// get film api
		axios
			.get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
			.then(response => {
			this.films1 = response.data.results
			console.log(this.films1)
			})
			.catch(error => {
			console.log(error)
			this.errored = true
			})
			.finally(() => this.loading = false)    
		
		axios
			.get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=2`)
			.then(response => {
			this.films2 = response.data.results
			console.log(this.films2)
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
		margin: 5% 15% 10% 15%;
		display: flex;
		flex-direction: column;
	}
	.contents{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.FilmsTitle {
		margin: 0 0 5% 40%;
		border: 4px solid red;
		border-style:hidden hidden solid hidden;
		width: 79px;
	}
</style>
