<template>
    <form>
        <input type="text" name="titleForm" value="" placeholder="Title...">
        <br/>
        <input type="text" name="commentForm" value="" placeholder="Add a comment...">
        <div>
            <Btn :text="'ADD COMMENT'"/>
        </div>
    </form>
</template>

<script>
import Btn from '../btn/Btn.vue'
export default {
    name:'Form',
    components:{
        Btn,
    } 
}
</script>

<style>
    form {
        background-color: grey;
        margin: auto;
        width: 400px;
    }
</style>