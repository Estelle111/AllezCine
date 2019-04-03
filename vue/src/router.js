import Vue from 'vue'
import Router from 'vue-router'
//pages
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
  ]
})
