import Vue from 'vue'
import Router from 'vue-router'
import Pageone from '@/components/pageone'
import Pagetwo from '@/components/pagetwo'
import Main from '../components/main'
import View from '../components/mv'
import Foo from '../components/viewone'
import Bar from  '../components/viewtwo'
import Baz from  '../components/view3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pageone',
      component: Pageone
    },
    {
      path: '/p2/:id',
      name: 'Pagetwo',
      component: Pagetwo
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: 'pageone',
          component: Pageone
        },
        {
          path: 'pagetwo',
          component: Pagetwo
        }
      ]
    },
    {
      path: '/view',
      // components: {
      //   header: Foo,
      //   menu: Bar,
      //   content: Baz
      // }
      component: View
    }
  ]
})
