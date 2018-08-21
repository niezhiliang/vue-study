import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import content from '../components/content'
import header from  '../components/header'
import menu from  '../components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/menu'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: 'menu',
        components: {
          header: header,
          menu: menu,
          content: content
        }
      }]
    }
  ]
})
