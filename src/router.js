import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Qrcode from './views/Qrcode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/m',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/qrcode/:id', name: 'qrcode',
        component: () => import('./views/Qrcode.vue')
    }
  ]
})
