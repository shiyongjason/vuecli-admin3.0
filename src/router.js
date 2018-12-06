import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/views/home'
Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'AppView',
      component: AppView,
      children: [
        {path: '/', name: 'home', component: Home},
        {path: '/button', name: 'c-button', component: loadView('c-button')},
        {path: '/switch', name: 'c-switch', component: loadView('c-switch')},
        {path: '/checkbox', name: 'c-checkbox', component: loadView('c-checkbox')},
        {path: '/alert', name: 'c-alert', component: loadView('c-alert')},
        {path: '/input', name: 'c-input', component: loadView('c-input')},
        {path: '/keyboard', name: 'c-keyboard', component: loadView('c-keyboard')},
        {path: '/loading', name: 'c-loading', component: loadView('c-loading')},
        {path: '/data-table', name: 'p-data-table', component: loadView('table')},
        {path: '/dropdown', name: 'c-dropdown', component: loadView('c-dropdown')},
        {path: '/navbar', name: 'c-navbar', component: loadView('c-navbar')},
        {path: '/container', name: 'c-container', component: loadView('c-container')},
        {path: '/demo', name: 'demo', component: loadView('demo')},
        {path: '/404', name: '404', component: loadView('404')},
        {path: '/500', name: '500', component: loadView('500')}
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/login.vue')
    },
    {path: '/cnode', name: 'cnode', component: loadView('cnode')},
    // pages
    {path: '/home-login', name: 'p-login', component: loadView('home-login')},
    {path: '/register', name: 'p-register', component: loadView('register')},
    {path: '/keyboard', name: 'p-keyboard', component: loadView('c-keyboard')},
    {path: '*', redirect: {name: '404'}}
  ]
})
