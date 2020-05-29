import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import VueWechatTitle from 'vue-wechat-title'
Vue.config.productionTip = false
Vue.use(VueWechatTitle)
Object.keys(filters).forEach(k => {
  　　Vue.filter(k, filters[k])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
