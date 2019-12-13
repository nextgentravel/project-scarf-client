import Vue from 'vue'
import VuexEasyFirestore from 'vuex-easy-firestore'
import Vuex from 'vuex'

import { firebase, initFirebase } from '../firebase.js'

import module from './module.js'

Vue.use(Vuex)

const easyFirestore = VuexEasyFirestore(
  [module],
  {logging: true, FirebaseDependency: firebase}
)

const storeData = {
  plugins: [easyFirestore],
  // ... your other store data
}

const store = new Vuex.Store(storeData)

initFirebase()
  .catch(error => {
    console.log(error)
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export default store;
