<template>
    <div class="films">
        <Title class="FilmsTitle" :text="'Top films'"/>
        <div class="contents">
        	<ApiMdb v-for="(film, index) in films" :key="index" :content="film"/>
		</div>
		<div @click="addData">
			<Btn class="button filmsBtn" :text="'more films'"></Btn>
		</div>
        <SocialNetwork/>
    </div>
</template>

<script>
import {axios} from '../axios'
import Title from '../components/title/Title'
import ApiMdb from '../components/apiMdb/ApiMdb'
import Btn from '../components/btn/Btn'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'


export default {
	name : 'Films',
	components:{
		Title,
		ApiMdb,
		Btn,
		SocialNetwork,
	},
	data () {
		return {
			films: [],
			loading: true,
			errored: false,
			page: 2,
		}
	},
	methods: {
		getData(page){
			axios
			.get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${page}`)
			.then(response => {
				this.films.push(...response.data.results)
				console.log(this.films)
			})
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => this.loading = false)    
		},
		addData(){
			console.log(this.page)
			this.page ++
			this.getData(this.page)
		},
		checkScroll(){
			if(window.scrollY / (document.body.offsetHeight - screen.height) * 100 > 95){
				this.addData()
			}
		}
	},
	mounted(){
	// get film api		
		this.getData(1);
		this.getData(2);
		window.addEventListener('scroll', this.checkScroll)
	},
	destroyed(){
		window.removeEventListener('scroll', this.checkScroll)
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
		width: 105px;
		text-align: center ; 
	}
	.filmsBtn {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
		padding: 10px;
		margin: 2% 0 0 40%;
	}
</style>
