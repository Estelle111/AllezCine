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

<style scoped>
input {
    padding: 10px;
    border-radius: 25px;
}

#recherche {
    float : right ;
    margin-right: 30px ;  
    border-radius: 10px; /* propriété CSS3 */
    -moz-border-radius: 10px; /* compatibilité avec Firefox */
    -webkit-border-radius: 10px; /* compatibilité avec les navigateurs Webkit */
}
</style>


