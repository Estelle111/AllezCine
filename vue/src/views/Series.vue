<template>
    <div class="series">
        <Title :text="'Top series'"/>
        <ImgSerie/>
        <SocialNetwork/>
    </div>
</template>

<script>
import Title from '../components/title/Title'
import ImgSerie from '../components/imgSerie/ImgSerie'
import SocialNetwork from '../components/socialNetwork/SocialNetwork'

export default {
    name : 'Series',
    components:{
    Title,
    ImgSerie,
    SocialNetwork,
    },
}

</script>

    <style>
        .series {
        background-color: rgb(87, 255, 138);
}
</style>