import Vue from 'vue'
import VueRouter from 'vue-router'
import Cryptolist from '../views/Cryptolist.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/cryptolist',
    name: 'cryptolist',
    component: Cryptolist,
  },
  {
    path: '/detail/:title',
    name: 'CryptoDetail',
    component: () => import('../views/CryptoDetail.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
