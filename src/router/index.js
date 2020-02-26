import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import JinDu from '@/components/child/JinDu'
import TableS from '@/components/child/TableS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'main',
      component: Main
    },{
      path: '/jindu',
      name: 'jindu',
      component: JinDu
    },{
      path: '/tables',
      name: 'tables',
      component: TableS
    }
  ]
})
