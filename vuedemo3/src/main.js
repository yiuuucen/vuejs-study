// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import Resource from 'vue-resource'
import IndexPage from './pages/index'
import Product from './pages/product'

Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/product',
      component: Product
    }
  ]
})
/* 在db.json所在的目录下，输入json-server db.json -p 3001 可以成功启动*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
