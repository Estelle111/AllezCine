<template>
    <div class="apiMdb">
		<router-link :to="`/Descriptions/${content.title ? 'movie' : 'tv'}/${content.id}`">
			<div class="apiMdb">
				<img class="poster" :src="getImage(content.poster_path)" alt="image"> <br/>
				<span v-if="content.title">
					{{content.title}}<br/>
				</span>
				<span v-if="content.name">
					{{content.name}}<br/>
				</span>
				<span v-if="content.release_date">
					{{content.release_date}}<br/>
				</span>
				<span v-if="content.first_air_date">
					{{content.first_air_date}}<br/>
				</span>
			</div>
		</router-link>
    </div>
</template>

<script>
import {getImage} from '../../getImage'

export default {
  name: 'ApiMdb',
  props: ['content'],
  mounted(){
	  this.content
  },
  methods:{
	  getImage,
  }
  

}
</script>

<style>
.poster{
	width: 150px;
	margin: 20px;
}
</style>