<template>
    <div class="series">
        <Title class="SeriesTitle" :text="'Top series'"/>
        <div class="contents">
            <ApiMdb v-for="(serie, index) in series" :key="index" :content="serie"/>
        </div>
        <div @click="addData">
            <Btn class="button seriesBtn" :text="'more series'"></Btn>
        </div>
        <SocialNetwork/>
    </div>
</template>

<script>
import {axios} from '../axios'
import Title from '../components/title/Title'
import ApiMdb from '../components/apiMdb/ApiMdb'
import Btn from '../components/btn/Btn'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'

export default {
    name : 'Series',
    components:{
        Title,
        ApiMdb,
        Btn,
        SocialNetwork,
    },
    data () {
        return {
            series: [],
            loading: true,
            errored: false,
            page: 2,
        }
    },
    methods: {
        getData(page){
            // get series api
            axios
                .get(`https://api.themoviedb.org/3/discover/tv?api_key=7ca673fff2a5fb82abd38a9a0d559c4e&page=${page}`)
                .then(response => {
                    this.series.push(...response.data.results)
                    console.log(this.series)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        addData(){
            console.log(this.page)
            this.page ++
            this.getData(this.page)
        },
        checkScroll(){
            if(window.scrollY / (document.body.offsetHeight - screen.height) * 100 > 95){
                this.addData()
            }
        }
    },
    mounted() {   
        this.getData(1);
        this.getData(2);
        window.addEventListener('scroll', this.checkScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.checkScroll)
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
		width: 105px;
		text-align: center ; 
    }
    .seriesBtn {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
		padding: 10px;
		margin: 2% 0 0 40%;
	}
</style>