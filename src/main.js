import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import {store} from "./store"
import lodash from 'lodash'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.prototype.lodash = lodash;

var sessionOption = {
  persist: false
}
Vue.use(VueSession, sessionOption)
Vue.use(VueCookies);

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
