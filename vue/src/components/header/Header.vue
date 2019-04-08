<template>
	<div id="header">
		<div id="appBar">
			<div id="nav" class="fontUno" >
				<!-- liens comme <a></a> pour rediriger sur la bonne page. via le router -->
				<router-link to="/" class="BarMot colored">HOME</router-link> 
				<router-link to="/Films" class="BarMot">Films populaires</router-link>
				<router-link to="/Series" class="BarMot">Séries Tv</router-link>
			</div>
			<Recherche/>
		</div>
		<div id="headeroussel">
			<CarouselView/>
		</div> 
	</div>
</template>

<script>

import CarouselView from '../carousel/CarouselView.vue'
//import du component Recherche
import Recherche from '../recherche/Recherche.vue'

export default {
	name: 'Header',
	components: {
	CarouselView,
	Recherche
	}
}
</script>


<style>
#header {
	font-size: 20px;
}
#nav {
	float: left; 
	margin:0 10px; 
}
#appBar {
	background-color: #2a2a2a; 
	height: 80px;
	display: flex; 
	align-items: center; 
	justify-content: space-between; 

}
#headeroussel {
	color: blue ;
	text-align: center;
  
}
.BarMot {
	margin-left: 50px; 
	color: white; 
  text-decoration: none;
  white-space: nowrap;
}



@media screen and (max-width: 755px) {
	.BarMot {
		width: 100%;
		font-size: 22px;
		margin-left: 17px ;
	}
	#appBar {
		background-color : #2a2a2a; 
		height: 80px;
		display: block; 
		align-items: left; 
	}
	#nav {
		float: left; 
		margin:0px 0px 0px 0px; 
  }
  #recherche {
    margin-right: 60px ;   
}
}
@media screen and (max-width: 380px) {
	.BarMot {
		width: 100%;
		font-size: 18px;
		margin-left: 17px ;
	}
	#appBar {
		background-color : #2a2a2a; 
		height: 80px;
		display: block; 
		align-items: left; 
	}
	#nav {
		float: left; 
		margin:0px 0px 0px 0px; 
  }
  #recherche {
    margin-right: 60px ;   
}
}
@media screen and (max-width: 330px) {
	.BarMot {
		width: 100%;
		font-size: 15px;
		margin-left: 7px ;
	}
	#appBar {
		background-color : #2a2a2a; 
		height: 80px;
		display: block; 
    align-items: left; 
	}
	#nav {
		float: left; 
		margin:0px 0px 0px 0px; 
  }
  #recherche {
    margin-right: 0px ;   
}
}
</style>
