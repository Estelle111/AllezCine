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
    top : 500px ; 
    left: -165px ; 
    width :200px ; 
    background-color :#4267b2 ; 
    transition : 1s; 
    color : white ; 
    height: 75px ;
    border-radius: 50px ; 

    }

    .socialF:hover {
    position : fixed ; 
    top : 500px ; 
    left: -125px ; 
    width :200px ; 
    background-color :#4267b2 ; 
    transition : 1s; 
    height: 75px ;
    border-radius: 50px ; 
    }

    .fab {
        color :white ; 
        float : right;
        margin-right: 5%;
        margin-top: 13%;
        font-weight: 50px;
    }
    .socialT {
    position : fixed ; 
    top : 550px ; 
    left: -170px ; 
    width :200px ; 
    background-color :#38A1F3 ; 
    transition : 1s; 
    color : white ; 
    height: 75px ;
    border-radius: 50px ; 
    }

    .socialT:hover {
    position : fixed ; 
    top : 550px ; 
    left: -125px ; 
    width :200px ; 
    background-color :#38A1F3 ; 
    transition : 1s; 
    height: 75px ;
    border-radius: 50px ; 
    }

@media screen and (max-height: 800px) {
.socialF { 
    top : 300px ; 
    }
    .socialF:hover {
    top : 300px ; 
    }
    .socialT {
    top : 350px ; 
    }

    .socialT:hover { 
    top : 350px ; 
    }
}
@media screen and (max-height: 400px) {
.socialF {
    top : 100px ; 

    }

    .socialF:hover {
    top : 100px ; 
    }

    .socialT {
    top : 150px ; 
    }

    .socialT:hover {
    top : 150px ; 
}
}
</style>