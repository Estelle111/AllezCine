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
			<span class="overview marge">
				<h3>Synopsis</h3>
				{{detail.overview}}
			</span>
			<div class="genres marge">
				<span v-for="(genre, index) in genres" :key="index" class="genre">
					{{genre.name}}
				</span>
			</div>
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

<style scoped>
	*{
		border-radius: 5px;
	}
	.details {
		display: flex;
		justify-content: space-between;
	}
	.imgDetail {
		height: 400px;
		margin-right: 50px;
    }
    .textDetail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .marge {
        margin-bottom: 50px;
    }
    .firstSpan {
        display: flex;
        justify-content: space-between;
    }
    .titleDetail {
        font-size: 25px;
        font-weight: bold;
    }
    .genres {
		display: flex;
		flex-wrap: wrap;
    }
    .genre {
		font-size: 0.7em;
        background-color: white;
        margin: 0 10px 10px 0;
        padding: 6px;
        height: auto;
        width: 115px;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
        /* box-shadow: 0px 8px 6px grey; */
    }
	span.genre{
		font-size: 0.8 em;
	}
</style>