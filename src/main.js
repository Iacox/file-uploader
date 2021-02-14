//  Styles
import './assets/styles/main.scss'

//  Scripts
import Vue from 'vue'
import Qui from '@qvant/qui'
import router from './router'
import store from './store'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Qui)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
