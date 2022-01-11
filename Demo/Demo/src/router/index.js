import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path:"/",
      component:demo
    }
  ]
})
