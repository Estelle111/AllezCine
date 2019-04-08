<template>
    <div id="recherche">
        <!--creer le mom du component input/Recherche -->
        <input type="search" v-model="search"
        placeholder="Recherche">
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
    border-radius: 10px; /* propriété CSS3 */
    -moz-border-radius: 10px; /* compatibilité avec Firefox */
    -webkit-border-radius: 10px; /* compatibilité avec les navigateurs Webkit */
}
</style>


