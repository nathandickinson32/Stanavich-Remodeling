import {  createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import InteriorView from '../views/InteriorView.vue'
import ExteriorView from '../views/ExteriorView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/Stanavich-Remodeling',
    name: 'HomeView',
    component: HomeView
},
{
  path: '/Stanavich-Remodeling/gallery',
  name: 'GalleryView',
  component: GalleryView
},
{
  path: '/Stanavich-Remodeling/about',
  name: 'AboutView',
  component: AboutView
},
{
  path: '/Stanavich-Remodeling/interior',
  name: 'InteriorView',
  component: InteriorView
},
{
  path: '/Stanavich-Remodeling/exterior',
  name: 'ExteriorView',
  component: ExteriorView
},

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })
  
  export default router
