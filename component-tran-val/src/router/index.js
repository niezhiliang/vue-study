import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Son from  '../components/son'
import Son2 from  '../components/son2'
import Son3 from  '../components/son3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/son',
      name: Son,
      component: Son
    },
    {
      path: '/son2',
      name: Son2,
      component: Son2
    },
    {
      path: '/son3',
      name: Son3,
      component: Son3
    }
  ]
})
