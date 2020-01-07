import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'
import './quasar'

import { Firebase } from './store/firebase'

Vue.config.productionTip = false

let app = '';

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


