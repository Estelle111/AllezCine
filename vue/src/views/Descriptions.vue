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
            <ApiMdb/>
        </div>
    </div>
</template>

<script>
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
}
</script>

<style>
  .descriptions {
    background-color: skyblue;
  }
</style>

