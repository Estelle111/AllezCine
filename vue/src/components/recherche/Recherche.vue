<template>
    <div id="recherche">
        <!--creer le mom du component input/Recherche -->
         <input type="search" v-model="search"
        placeholder="Recherche dans le site">
        
    </div>
</template>

<script>



export default {
    name : 'Recherche',
    props: ['text'],
    conponents:{
    },
    data (){
        return {
            search: null,
        }
    }
}
</script>

<style>
#recherche {
    float : right ;
    margin-right: 30px ;  
}
</style>


