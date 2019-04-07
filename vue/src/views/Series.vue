<template>
    <div class="series">
        <Title class="SeriesTitle" :text="'Top series'"/>
        <div class="contents">
            <ApiMdb v-for="(serie1, index) in tv1" :key="index" :content="serie1"/>
            <ApiMdb v-for="(serie2, index) in tv2" :key="index" :content="serie2"/>
        </div>
        <SocialNetwork/>
    </div>
</template>

<script>
import {axios} from '../axios'
import Title from '../components/title/Title'
import ApiMdb from '../components/apiMdb/ApiMdb'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'

export default {
    name : 'Series',
    components:{
        Title,
        ApiMdb,
        SocialNetwork,
    },
    data () {
        return {
            tv1: null,
            tv2: null,
            loading: true,
            errored: false
        }
    },
    mounted () {   
        // get series api
        axios
            .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=1`)
            .then(response => {
                this.tv1 = response.data.results
                console.log(this.tv1)
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

        axios
            .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=2`)
            .then(response => {
                this.tv2 = response.data.results
                console.log(this.tv2)
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
    .series {
        margin: 5% 15% 10% 15%;
		display: flex;
		flex-direction: column;
    }
    .contents {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
    }
    .SeriesTitle {
        margin: 0 0 5% 40%;
        border: 4px solid red;
		border-style:hidden hidden solid hidden;
		width: 89px;
    }
</style>