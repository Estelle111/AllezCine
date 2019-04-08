<template>
    <Carousel :per-page="1"  :mouse-drag="true">
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg'" alt="video poster">
            <div id="headerTitle">
                <h2 class="colored ALLEZCINE">ALLEZ</h2><h2 class="ALLEZCINE colorwhite">CINE</h2>
            </div>
            <div id="text-carousel">
                <div id="titre">LASTEST <span>ON</span>LINE <span>MO</span>VIES</div>
                <div id="soustitre">IN SPACE NO ONE CAN HEAR YOU SCREAM</div>
                <Btn id="btnCarousel" :text="'GO TO THE FILM'" />
            </div>
        </Slide>
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/wtZj5nn6hVwgakPdg6y6gm3eFXU.jpg'" alt="video poster">
            <div id="headerTitle">
                <h2 class="colored ALLEZCINE">ALLEZ</h2><h2 class="ALLEZCINE colorwhite">CINE</h2>
            </div>
            <div id="text-carousel">
                <div id="titre">LASTEST <span>ON</span>LINE <span>MO</span>VIES</div>
                <div id="soustitre">IN SPACE NO ONE CAN HEAR YOU SCREAM</div>
                <Btn id="btnCarousel" :text="'GO TO THE FILM'" />
            </div>
        </Slide>
        <Slide>
            <img class="imgCarousel" :src="'https://image.tmdb.org/t/p/original/6Q0tvlUJ32vxfbyuyEEm2OyDMeA.jpg'" alt="video poster">
            <div id="headerTitle">
                <h2 class="colored ALLEZCINE">ALLEZ</h2><h2 class="ALLEZCINE colorwhite">CINE</h2>
            </div>
            <div id="text-carousel">
                <div id="titre">LASTEST <span>ON</span>LINE <span>MO</span>VIES</div>
                <div id="soustitre">IN SPACE NO ONE CAN HEAR YOU SCREAM</div>
                <Btn id="btnCarousel" :text="'GO TO THE FILM'" />
            </div>
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
        Slide,
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
        max-height : 450px;
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
    #text-carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        border: 1px solid black;
    }
    .logo{
        position: absolute;
        top: 40%;
        margin-top: -150px;
        padding-left: 10px;
    }
    #headerTitle {
        
    }
    #titre {
        position: absolute;
        top: 30%;
        margin-top: -150px;
        padding-left: 10px;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 2.3em;
        color: white;
        text-align: center;
    }

    #soustitre{
        position: absolute;
        top: 37%;
        margin-top: -150px;
        padding-left: 10px;
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 1em;
        color: white;
    }
    #btnCarousel {
        background: red;
        position: absolute;
        top: 41%;
        margin-top: -150px;
        padding-left: 10px;
        height: 4em;
        width: 10em;
        white-space: nowrap;
        text-align: center;
    }
    

    @media screen and (max-width: 755px) {
    .imgCarousel {
        width: 100%;
        margin-top: -20px;
    }
    }

    @media screen and (max-height: 1300px) and (max-width: 900px) {
    .VueCarousel-pagination[data-v-438fd353] {
        width: 100%;
        text-align: center;
        margin-top: 30%;
        position: absolute;
    }
    }
</style>

