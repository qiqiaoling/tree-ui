import Vue from 'vue'
import VueRouter from 'vue-router'
import onion from './index.js'
import App from './App.vue'

import Button from './pages/button.vue'

Vue.use(onion)
Vue.use(VueRouter)

const routes = [
  {
    path: '/button',
    component: Button
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
