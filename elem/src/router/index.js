import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'waimai',
      component: () => import('@/components/waimai/waimai')
    },
    {
      path: '/scal',
      name: 'scal',
      component: () => import('@/components/waimai/components/scal')
    }
  ]
})
