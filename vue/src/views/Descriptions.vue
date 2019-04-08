<template>
	<div id="background">
		<div class="descriptions">
			<SocialNetwork/>
			<div>
				<Detail/>
				<Form/>
				<Comment/>
			</div>
			<div>
				<Title class="DescriptionsTitle" :text="'More films'"/>
				<div class="contents">
					<ApiMdb v-for="(film, index) in films" :key="index" :content="film" class="descriptionsVideo"/>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import {axios} from '../axios'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'
import Detail from '../components/detail/Detail'
import Form from '../components/form/Form'
import Comment from '../components/comment/Comment'
import Title from '../components/title/Title'
import ApiMdb from '../components/apiMdb/ApiMdb'

export default {
	name : 'Descriptions',
	components:{
		SocialNetwork,
		Detail,
		Form,
		Comment,
		Title,
		ApiMdb
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
			.get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=2`)
			.then(response => {
			this.films = response.data.results.slice(0, 6)
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

<style scoped>
	
	#background{
		background-color: #f9f9f9;
		padding: 1px;

	}
	.descriptions {
		margin: 5% 20% 10% 20%;
		display: flex;
		flex-direction: column;
	
	}
	.descriptionsVideo {
		transform: scale(0.8);
		margin-right: -20px;

	}
	.DescriptionsTitle {
		border: 3px solid red;
		border-style:hidden hidden hidden solid;
		padding-left: 5px; 
	}

    

</style>

