<template>
	<span>
		<i v-for="(icone, index) in icones" :key="index" class="far fa-star">
			<i class="fas fa-star">
				<!-- {{getStars(votes)}}  -->
			</i>
		</i>
	</span>
</template>

<script>
import {axios} from '../../axios'
/* import {getStars} from '../../getStars' */

export default {
	name: 'Stars',
	data () {
		return {
			votes: null,
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
			this.votes = response.data.vote_average
			console.log(this.votes)
			})
			.catch(error => {
			console.log(error)
			this.errored = true
			})
			.finally(() => this.loading = false) 
	},
	methods: {
		/* getStars */
		/* getStars: function(path) {
			let numberOfStars = null;
			let stars = ' ';
			this.numberOfStars = Math.round(this.votes/2);
				for(var index = 0; index < numberOfStars; index++)
        			stars += '<i class="far fa-star"/>';
		} */
		
	}
}
</script>

<style>
	i.far {
		display: inline-block;
		position: relative;
	}
	
	i.fas {
		position: absolute;
		top: 0;
		left: 0;
		white-space: nowrap;
		overflow: hidden;
		width: 0;
	}
	
	i.fas::before {
		color: #f8ce0b;
	}
</style>