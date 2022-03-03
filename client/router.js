import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'
import axios from 'axios'
import Swal from 'sweetalert2'
import jquery from 'jquery'


Vue.prototype.$axios = axios
Vue.prototype.$swal = Swal
Vue.prototype.$jquery = jquery

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'welcome', component: page('welcome.vue') },
  { path: '/whitepaper', name: 'whitepaper', component: page('whitepaper.vue') },
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
