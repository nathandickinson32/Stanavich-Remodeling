import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/stanavich-remodeling',
    name: 'HomeView',
    component: HomeView
},

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router
