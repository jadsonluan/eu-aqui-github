import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth/:token',
      name: 'auth',
      component: () => import(/* webpackChunkName: "about" */ './views/Auth.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('./views/Error.vue')
    }
  ]
})
