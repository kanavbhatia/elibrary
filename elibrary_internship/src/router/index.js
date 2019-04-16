import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/Search'
import display from '@/components/display'
import login from '@/components/login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/display',
      name: 'display',
      component: display
    }
  ]
})
