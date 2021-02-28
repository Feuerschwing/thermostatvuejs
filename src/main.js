import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false


new Vue({
  router, // inject the router to make whole app router-aware
  store,
  render: h => h(App)
}).$mount("#app");
