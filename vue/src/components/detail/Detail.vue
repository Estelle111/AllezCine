<template>
    <div class="details">
		<img class="imgDetail" :src="getImage(detail.poster_path)" alt="video poster"> 
		<div class="textDetail">
			<span v-if="detail.title && detail.release_date" class="firstSpan">
				<span class="titleDetail">
					{{detail.title}}
					({{getYear(detail.release_date)}})
				</span>
				<Stars/>
			</span>
			<span v-if="detail.name && detail.first_air_date" class="firstSpan">
				<span class="titleDetail">
					{{detail.name}}
					({{getYear(detail.first_air_date)}})
				</span>
				<Stars/>
			</span>
			<span class="overview">
				<h3>Synopsis</h3>
				{{detail.overview}}
			</span>
			<span v-for="(genre, index) in genres" :key="index" class="genres">
				{{genre.name}}
			</span>
		</div>
    </div>
</template>

<script>
import {axios} from '../../axios'
import {getImage} from '../../getImage'
import {getYear} from '../../getYear'
import Stars from '../stars/Stars.vue'

export default {
	name: 'Detail',
	components: {
		Stars,
	},
	methods:{
		getImage,
		getYear
	},
	data () {
		return {
			genres: null,
			detail: null,
			loading: true,
			errored: false,
		}
	},
	mounted () { 
		// get detail api in function of api type and id (in function of what user clicks on) 
		console.log(this.$router)
		console.log(this.$router.history.current.params.id)
		console.log(this.$router.history.current.params.type)
		axios
			.get(`https://api.themoviedb.org/3/${this.$router.history.current.params.type}/${this.$router.history.current.params.id}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&language=en-US`)
			.then(response => {
			this.detail = response.data
			console.log(this.detail)
			})
			.catch(error => {
			console.log(error)
			this.errored = true
			})
			.finally(() => this.loading = false) 
		
		axios
			.get(`https://api.themoviedb.org/3/${this.$router.history.current.params.type}/${this.$router.history.current.params.id}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&language=en-US`)
			.then(response => {
			this.genres = response.data.genres
			console.log(this.genres)
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