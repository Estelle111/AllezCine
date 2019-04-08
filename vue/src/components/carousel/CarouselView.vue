<template>
    <Carousel :per-page="1"  :mouse-drag="true">
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg'" alt="video poster">
            <Btn :text="'GO TO THE FILM'" />
        </Slide>
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/wtZj5nn6hVwgakPdg6y6gm3eFXU.jpg'" alt="video poster">
            <Btn :text="'GO TO THE FILM'" />
        </Slide>
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/6Q0tvlUJ32vxfbyuyEEm2OyDMeA.jpg'" alt="video poster">
            <Btn :text="'GO TO THE FILM'" />
        </Slide>
    </Carousel> 
</template>

<script>
//import des component carousel et slide du npm telechargé 'carousel'
import { Carousel, Slide } from 'vue-carousel'
//import du component Btn
import Btn from '../btn/Btn.vue'
import {axios} from '../../axios'
import {getImage} from '../../getImage'

export default {
    name: 'CarouselView',
    // ses components sont; 
    components:{
        Carousel,
        slide,
        Btn,
    },
    //data ou ; "ce qu il contient"
    data(){
        return {
            lists:['test1', 'test2', 'test3'],
        }
    },
	
}
</script>

<style>
    .VueCarousel {
        width : 100%;
        height : 450px;
    }
    .VueCarousel-pagination[data-v-438fd353] {
        width: 100%;
        text-align: center;
        margin-top: 375px;
        position: absolute;
    }
    .example-slide {
        align-items: center;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
    }
    .imgCarousel {
        width: 100%;
        margin-top: -80px;
    }

    @media screen and (max-width: 755px) {
    .imgCarousel {
        width: 100%;
        margin-top: -20px;
    }
    }
</style>

