<template>
    <div>
        <div v-for="(comment, index) in videoComments" :key="index" class="commentCard">
            <div  class="comment">
                    <h4>
                        {{comment.titre}}
                    </h4>
                    <p>
                        {{comment.commentaire}}
                    </p>
                    <p>
                        {{comment.date}}
                    </p>
            </div>
            <Like class="like"/>
        </div>
    </div>
    
</template>

<script>
    import {axios} from '../../axios'
    import Like from '../like/Like.vue'

    export default {
        name:'Comment',
        components:{
            Like
        },
        data () {
            return {
                videoComments: null,
                loading: true,
                errored: false
            }
        },
        props: {
            forceRerender: {
                type: Function
            },
        },
        methods: {
            getId(idVideo){
                console.log(idVideo)
                axios
                    .get(`http://localhost:8888/AllezCine/php/read.php?idVideo=${idVideo}`)
                    .then(response => {
                        this.videoComments = response.data
                        console.log(this.videoComments)
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                    .finally(() => this.loading = false)  
            },
        },
        mounted(){
            this.comments = this.getId(this.$router.history.current.params.id)
        }
    }
</script>

<style>
    .commentCard {
        margin: 0 0 10% 0;
        display: flex;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px; 
    }
    .comment {
        margin: 10px 0 10px 25px;
        width: 642px; 
    }
    .like {
            margin: 115px 25px 0 0;
    }
</style>

 
 