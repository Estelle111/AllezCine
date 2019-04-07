<template>
    <div class="commentCard">
        <div class="comment">
            <h4>
                Tim Burton et ses acteurs fétiches
            </h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Natus ad quia sed quisquam? Totam dolores excepturi quaerat, 
                iste dicta sint delectus quae aliquam distinctio minus. 
                Impedit amet voluptas quod. Quia!
            </p>
            <p>7 avril 2019  11:30:45pm</p>
        </div>
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
    .commentCard {
        margin: 0 0 10% 0;
        display: flex;
        justify-content: space-around;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
    }
    .comment {
        margin: 10px 0 10px 25px;
        width: 642px;
    }
</style>