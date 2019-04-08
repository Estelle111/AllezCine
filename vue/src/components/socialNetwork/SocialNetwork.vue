<template>
    <div>
        <a href="https://facebook.com" target="_blank">
            <div class ="socialF">
                <i class="fab fa-facebook-f"></i>
            </div>
        </a>
        <a href="https://twitter.com" target="_blank">
            <div class ="socialT">
                <i class="fab fa-twitter"></i>
            </div>
        </a>
    </div>
</template>

<script>
export default {
	name: 'SocialNetwork',
}
</script>

<style scoped>
    .socialF {
    position : fixed ; 
    top : 600px ; 
    left: -165px ; 
    width :200px ; 
    background-color :#4267b2 ; 
    transition : 1s; 
    color : white ; 
    height: 50px ;
    border-radius: 25% ; 

    }

    .socialF:hover {
    position : fixed ; 
    top : 600px ; 
    left: -125px ; 
    width :200px ; 
    background-color :#4267b2 ; 
    transition : 1s; 
    height: 50px ;
    border-radius: 25% ; 
    }

    .fab {
        color :white ; 
        float : right;
        margin-right: 5%;
        margin-top: 8%;
    }
    .socialT {
    position : fixed ; 
    top : 660px ; 
    left: -170px ; 
    width :200px ; 
    background-color :#38A1F3 ; 
    transition : 1s; 
    color : white ; 
    height: 50px ;
    border-radius: 25% ; 
    }

    .socialT:hover {
    position : fixed ; 
    top : 660px ; 
    left: -125px ; 
    width :200px ; 
    background-color :#38A1F3 ; 
    transition : 1s; 
    height: 50px ;
    border-radius: 25% ; 
    }



</style>