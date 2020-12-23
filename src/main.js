import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
/* import vuetify from './plugins/vuetify'; */
import Vuetify from 'vuetify'


Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  store,
  components: { App },
  /* vuetify, */
  template: '<App/>'
})
