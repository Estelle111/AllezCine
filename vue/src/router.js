import Vue from 'vue'
import Router from 'vue-router'
//pages
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Series from './views/Series.vue'
import Descriptions from './views/Descriptions.vue'

//Components
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //Chemin des pages et components
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Films',
      component : Films
    },
    {
      path: '/',
      name: 'Series',
      component : Series
    },
    {
      path: '/',
      name: 'Descriptions',
      component : Descriptions
    },
    {
      path: '/',
      name: 'Header',
      component : Header
    },
    {
      path: '/',
      name: 'Footer',
      component : Footer
    }
  ]
})
