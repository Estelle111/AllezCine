<template>
    <div id="btn">
        <button> {{ text }} </button>
    </div>
</template>

<script>
export default {
    name:'btn',
    props: ['text'],

    
}
</script>

<style>

button {
background-color: red;
border: none;
color: white;
padding: 0px 55px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
}
</style>

