import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/static/css/reset.css'
import http from './http/httpResource.js'
import moment from 'moment'
Vue.prototype.$moment = moment
moment.locale('zh-cn')
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(http)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
