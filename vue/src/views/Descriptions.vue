<template>
    <div class="descriptions">
        <SocialNetwork/>
        <div>
            <Detail/>
            <Form/>
            <Comment/>
        </div>
    </div>
</template>

<script>
import SocialNetwork from '../components/socialNetwork/SocialNetwork'
import Detail from '../components/detail/Detail'
import Form from '../components/form/Form'
import Comment from '../components/comment/Comment'

export default {
  name : 'Descriptions',
  components:{
    SocialNetwork,
    Detail,
    Form,
    Comment
  },
}
</script>

<style>
  .descriptions {
    background-color: skyblue;
  }
</style>

