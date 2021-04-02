import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HalfScreenDialogDemo from '@/example/HalfScreenDialogDemo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/half',
      name: 'HalfScreenDialogDemo',
      component: HalfScreenDialogDemo
    }
  ]
})
