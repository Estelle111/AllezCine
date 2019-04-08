<template>

<div id="footer" >
    <div class="FooterH1 fontUno">
        <h2 class="colored ALLEZCINE">ALLEZ</h2><h2 class="ALLEZCINE colorwhite">CINE</h2>
    </div>
    <div class="footer fontUno">
        <div class="rowAll">
            <h2 class="FooterH2">LES FONDAMENTAUX</h2>
            <router-link to="/" class="Footermot">A propos de Allez Ciné</router-link> <br>
            <router-link to="/" class="Footermot">Contactez-nous</router-link> <br>
            <router-link to="/" class="Footermot">Forum d'aide</router-link> <br>
        </div>
        <div class="rowAll">
            <h2 class="FooterH2">COMMUNAUTE</h2> 
            <router-link to="/" class="Footermot">Règles</router-link> <br>
            <router-link to="/" class="Footermot">Classement</router-link><br>
            <router-link to="/" class="Footermot">Forum</router-link><br>
            <router-link to="/" class="Footermot">Twitter</router-link><br>
            <router-link to="/" class="Footermot">Facebook</router-link>
        </div>
        <div class="rowAll">
            <h2 class="FooterH2">LEGAL</h2> 
            <router-link to="/" class="Footermot">Condition d'utilisation</router-link><br>
            <router-link to="/" class="Footermot">Politique de confidentialité</router-link><br>
            <router-link to="/" class="Footermot">Descriptions</router-link><br>
        </div>
    </div>
</div>
</template>

<script>
/*
import X from '../'
//import du component Recherche
import XX from '../'

export default {
name: 'Footer',

components: {
    
}
}
*/
</script>

<style>
    * {
        box-sizing: border-box;
    }
    /* Create three equal columns that floats next to each other */
    .rowAll {
        float: left;
        width: 33.33%;
        padding: 0 0 30px 70px;
    }
    /* Clear floats after the columns */
    .footer:after {
        content: "";
        display: table;
        clear: both;
    }
    #footer {
        background-color: #2a2a2a;
    }
    .footer{
        background-color: #2a2a2a;
        color : white ; 
        text-decoration: none ;
    }
    .Footermot {
        text-decoration: none ;
        color : white ;  
        line-height: 35px;
    }
    .ALLEZCINE {
        display: inline;
        font-size: 40px; 
    }
    .FooterH1 {
        padding: 45px 0 25px 70px; 
    }
    .FooterH2 {
        padding-bottom: 30px; 
    }



    /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 840px) {
    .rowAll {
        width: 100%;
        height: 200px;
        margin-top: 100px;
        text-align: center ; 
    }
    .FooterH1 {
    margin-left : 20px ; 
    }
    .FooterH2 {
    margin: 0px 0px 0px 0px ;
    }
}
    @media screen and (max-width: 840px) {
    .rowAll {
        width: 100%;
        height: 200px;
        margin-top: 100px;
        text-align: center ; 
    }
    .FooterH1 {
    margin-left : 5px ; 
    }
    .FooterH2 {
    margin: 0px 0px 0px 0px ;
    }
        .ALLEZCINE {
        font-size: 25px; 
}
}
</style>
