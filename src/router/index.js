import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import DemoRouteComponent from '@/demo/DemoRouteComponent'
import DemoVuex from '@/demo/DemoVuex'
import DemoShare from '@/demo/DemoShare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'DemoVuex',
      component: DemoVuex
    },
    {
      path: '/route-component/:number',
      props: true,
      name: 'DemoRouteComponent',
      component: DemoRouteComponent
    },
    {
      path: '/share',
      name: 'DemoShare',
      component: DemoShare
    }
  ]
})
