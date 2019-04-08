<template>
	<span class="starsDisplay">
		<i class="fas fa-star" v-if="(Math.round(vote) > 0)"></i>
		<i class="far fa-star" v-else></i>
		<i class="fas fa-star" v-if="(Math.round(vote) >= 4)"></i>
		<i class="far fa-star" v-else></i>
		<i class="fas fa-star" v-if="(Math.round(vote) >= 6)"></i>
		<i class="far fa-star" v-else></i>
		<i class="fas fa-star" v-if="(Math.round(vote) >= 8)"></i>
		<i class="far fa-star" v-else></i>
		<i class="fas fa-star" v-if="(Math.round(vote) >= 10)"></i>
		<i class="far fa-star" v-else></i>
	</span>
</template>

<script>
import {axios} from '../../axios'

export default {
	name: 'Stars',
	data () {
		return {
			vote: null,
			numberOfStars: null,
			loading: true,
			errored: false,
			icones: 5,
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
			this.vote = response.data.vote_average
			console.log(this.vote)
			})
			.catch(error => {
			console.log(error)
			this.errored = true
			})
			.finally(() => this.loading = false) 
	},
}
</script>

<style>
	.starsDisplay {
		display: flex;
	}
	.fa-star {
		color: #f8ce0b;
	}
</style>