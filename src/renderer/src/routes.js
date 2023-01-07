import { createWebHistory, createRouter } from "vue-router"
const APP_NAME = 'scrap'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home/Home.vue'),
  },
  {
    path: '/register-products',
    name: 'RegisterProducts',
    component: () => import('./pages/Products/RegisterProduct.vue')
  }
]


export default createRouter({
  history: createWebHistory(),
  routes
})
