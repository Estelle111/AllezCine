<template>

<div id="footer" >
    <div class="footer fontUno">
        <div class="rowAll">
            <h2 class="FooterH2">Les FONDAMENTAUX</h2>
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
            <h2 class="FooterH2">Legal</h2> 
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
padding: 10px;
 height: 230px; /* Should be removed. Only for demonstration */

}

/* Clear floats after the columns */
.footer:after {
content: "";
display: table;
clear: both;

}
.footer{
background-color: #2a2a2a;
color : white ; 
text-decoration: none ;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .rowAll {
    width: 100%;
  }
}
.Footermot {
text-decoration: none ;
color : white ;  
}

/*
background-color: rgb(9, 38, 92) ;
*/
</style>
