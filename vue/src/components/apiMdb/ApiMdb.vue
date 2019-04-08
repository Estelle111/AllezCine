<template>
    <div>
        <router-link class="linkDecoration" :to="`/Descriptions/${content.title ? 'movie' : 'tv'}/${content.id}`">
            <div class="apiMdb">
                <img class="poster" :src="getImage(content.poster_path)" alt="video poster">
                <div class="videoTitleAndDate">
                    <div class="videoTitle" v-if="content.title">
                        {{content.title}}
                    </div>
                    <div class="videoTitle" v-if="content.name">
                        {{content.name}}
                    </div>
                    <div v-if="content.release_date">
                        {{getYear(content.release_date)}}
                    </div>
                    <div v-if="content.first_air_date">
                        {{getYear(content.first_air_date)}}
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import {getImage} from '../../getImage'
import {getYear} from '../../getYear'

export default {
    name: 'ApiMdb',
    props: ['content'],
    mounted(){
        this.content
    },
    methods:{
        getImage,
        getYear
    }
}
</script>

<style>  
    .linkDecoration {
        text-decoration: none;
        color: black;
    }
    .apiMdb {
        margin-bottom: 30px;
    }
    .poster{
        width: 130px;
        margin-right: 10px;
    }
    .videoTitleAndDate {
        display: flex;
        flex-direction: column;
        width: 150px;
    }
    .videoTitle {
        text-align: center;
        max-width: 130px ; 
        padding: 10px ; 
    }
</style>        