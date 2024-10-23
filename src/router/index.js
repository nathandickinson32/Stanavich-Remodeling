import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import InteriorView from '../views/InteriorView.vue'
import ExteriorView from '../views/ExteriorView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
},
{
  path: '/stanavich-remodeling/gallery',
  name: 'GalleryView',
  component: GalleryView
},
{
  path: '/stanavich-remodeling/about',
  name: 'AboutView',
  component: AboutView
},
{
  path: '/stanavich-remodeling/interior',
  name: 'InteriorView',
  component: InteriorView
},
{
  path: '/stanavich-remodeling/exterior',
  name: 'ExteriorView',
  component: ExteriorView
},

  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  
  export default router
