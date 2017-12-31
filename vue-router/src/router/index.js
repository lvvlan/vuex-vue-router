import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import RouterA from '@/components/routerA'
// import RouterB from '@/components/routerB'

Vue.use(Router)

/**
 * webpackChunkName相同则打包在同一chunk里
 */

const RouterA = () => import(/* webpackChunkName: "group-router" */ '@/components/routerA')
const RouterB = () => import(/* webpackChunkName: "group-router" */ '@/components/routerB')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/routerA',
      component: RouterA
    },
    {
      path: '/routerB',
      component: RouterB
    }
  ]
})
