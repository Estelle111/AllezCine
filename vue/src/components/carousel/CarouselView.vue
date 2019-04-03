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
import { Carousel, Slide } from 'vue-carousel'
import Btn from '../btn/Btn.vue'

export default {
    name: 'CarouselView',
    props: [],
    data(){
        return {
            lists:['test1', 'test2', 'test3']
        }
    },
    components:{
        Carousel,
        Slide,
        Btn
    }
}
</script>

<style>
.VueCarousel {
    background-color: green;

}
.example-slide {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
}
</style>

