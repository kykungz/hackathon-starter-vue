// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ShareFacebook from './global/ShareFacebook'
import ShareTwitter from './global/ShareTwitter'

import SocialSharing from 'vue-social-sharing'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(SocialSharing)
Vue.use(BootstrapVue);

Vue.component('share-facebook', ShareFacebook)
Vue.component('share-twitter', ShareTwitter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
