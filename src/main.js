import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/dragresize.js'
import router from './router'
import './directives'
import './style/reset.less'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')