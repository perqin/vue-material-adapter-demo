import Vue from 'vue'
import VueMaterialAdapter from 'vue-material-adapter'
import App from './App.vue'
import './theme.scss'

Vue.use(VueMaterialAdapter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
