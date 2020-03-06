import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Purchase from '../views/Purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
