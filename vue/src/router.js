import Vue from 'vue'
import Router from 'vue-router'
//centralisation des pages pour pouvoir passer d un enfant a un parent
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Series from './views/Series.vue'
import Descriptions from './views/Descriptions.vue'



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
      path: '/Films',
      name: 'Films',
      component : Films
    },
    {
      path: '/Series',
      name: 'Series',
      component : Series
    },
    {
      path: '/Descriptions/:type/:id',
      name: 'Descriptions',
      component : Descriptions
    },
  ]
})
