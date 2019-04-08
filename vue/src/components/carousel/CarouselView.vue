<template>
    <Carousel :per-page="1" :mouse-drag="true">
        <Slide v-for="(slide, index) in lists" :key="index">
            Slide {{ slide }} Content
            <br/>
            <Btn :text="'GO TO THE FILM'" />
        </Slide>
    </Carousel> 
</template>

<script>
//import des component carousel et slide du npm telechagé 'carousel'
import { Carousel, Slide } from 'vue-carousel'
//import du component Btn
import Btn from '../btn/Btn.vue'
import {axios} from '../axios'



export default {
    name: 'CarouselView',
    //data ou ; "ce qu il contient"
    data(){
        return {
            slide: null,
            loading: true,
            errored: false,
            lists:['test1', 'test2', 'test3']
        }
    },
    // ses components sont; 
    components:{
        Carousel,
        slide,
        Btn,
        ApiMdb,   
    },
    mounted () {
	// get film api
	axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
    .then(response => {
		this.Slide = response.data.results
		console.log(this.slide)
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
.VueCarousel {
    background-color: green;
    width : 95%;
    margin-left : auto ; 
    margin-right : auto ; 
    height : 300px;

}
.example-slide {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
}
</style>

