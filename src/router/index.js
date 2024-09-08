import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import InteriorView from '../views/InteriorView.vue'

const routes = [
  {
    path: '/stanavich-remodeling',
    name: 'HomeView',
    component: HomeView
},
{
  path: '/stanavich-remodeling/gallery',
  name: 'GalleryView',
  component: GalleryView
},
{
  path: '/stanavich-remodeling/interior',
  name: 'InteriorView',
  component: InteriorView
},

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router
