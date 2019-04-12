<template>
    <div class="home">
        <div class="homeFilm">
            <Title class="homeTitle" :text="'Films'"/>
			<div class="contents">
				<ApiMdb v-for="(film, index) in films" :key="index" :content="film"/>
			</div>
			<router-link :to="`/Films`">
            <Btn class="button" :text="'more films'"></Btn>
			</router-link>
        </div>
        <div class="homeSerie">
            <Title class="homeTitle" :text="'TV Series'"/>
			<div class="contents">
            	<ApiMdb v-for="(serie, index) in tv" :key="index" :content="serie"/>
			</div>
			<router-link :to="`/Series`">
            <Btn class="button" :text="'more series'"></Btn>
			</router-link>
        </div>
        <SocialNetwork/>
    </div>
</template>

<script>
import {axios} from '../axios'
import ApiMdb from '../components/apiMdb/ApiMdb.vue'
import Title from '../components/title/Title.vue'
import Btn from '../components/btn/Btn.vue'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'

export default {
	name : 'Home',
	components:{
		Title,
		ApiMdb,
		Btn,
		SocialNetwork,
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

<style scoped>
	.home {
		margin: 5% 15% 10% 15%;
		display: flex;
		flex-direction: column;
	}
	.homeTitle {
		border: 3px solid red;
		border-style:hidden hidden hidden solid;
		padding-left: 5px; 
	}
	.homeFilm {
		margin-bottom: 80px;
	}
	.contents{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.button {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
		padding: 10px;
		margin: 2% 0 0 40%;
	}
</style>
