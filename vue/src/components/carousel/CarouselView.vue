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
//import des component carousel et slide du npm telechage 'carousel'
import { Carousel, Slide } from 'vue-carousel'
//import du component Btn
import Btn from '../btn/Btn.vue'



export default {
    name: 'CarouselView',
    props: [

    ],
    //data ou ; "ce qu il contient"
    data(){
        return {
            lists:['test1', 'test2', 'test3']
        }
    },
    // ses components sont; 
    components:{
        Carousel,
        Slide,
        Btn,
        
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

