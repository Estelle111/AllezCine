<template>
    <div class="comment">
        <div>Comment</div>
        <Like/>
    </div>
</template>

<script>
import Like from '../like/Like.vue'
export default {
    name:'Comment',
    components:{
        Like
    } 
}
</script>

<style>
    .comment {
        background-color: #c36cff;
        margin: auto;
        width: 400px;
    }
</style>