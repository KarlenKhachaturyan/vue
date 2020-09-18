import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SquareComponent from '@/components/test/SquareComponent'
import CircleComponent from '@/components/test/CircleComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/square',
      name: 'Square',
      component: SquareComponent
    },
    {
      path: '/circle',
      name: 'Circle',
      component: CircleComponent
    }

  ]
})
