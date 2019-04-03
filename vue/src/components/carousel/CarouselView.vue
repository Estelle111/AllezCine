<template>
    <div id="nav">
        <Carousel :per-page="1" :mouse-drag="true">
            <Slide v-for="(slide, index) in lists" :key="index">
                Slide {{ slide }} Content
            </Slide>
        </Carousel>  
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: 'CarouselView',
    props: {
    
    },
    data(){
        return {
            lists:['test1', 'test2', 'test3']
        }
    },
    components:{
        Carousel,
        Slide
    }
}
</script>

<style>
.example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
}
</style>

