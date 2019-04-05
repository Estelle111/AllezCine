<template>
    <div class="descriptions">
        <SocialNetwork/>
        <div>
            <Detail/>
            <Form/>
            <Comment/>
        </div>
        <div>
            <Title :text="'More films'"/>
           <div>
			   {{content.budget}}
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
      content: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
	// get film api
	console.log(this.$router)
	console.log(this.$router.history.current.params.id)
	console.log(this.$router.history.current.params.type)
	axios
	  .get(`https://api.themoviedb.org/3/${this.$router.history.current.params.type}/${this.$router.history.current.params.id}?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&language=en-US`)
      .then(response => {
		this.content = response.data
		console.log(this.content)
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
  .descriptions {
    background-color: skyblue;
  }
</style>

