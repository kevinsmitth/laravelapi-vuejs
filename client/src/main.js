import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//import io from 'socket.io-client'
import "./plugins/boostrap-vue"

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


