import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
import { Firebase, initFirebase } from './firebase.js'
import trips from './modules/trips.js'

Vue.use(Vuex)

const easyFirestore = VuexEasyFirestore(
  [trips],
  {logging: true, FirebaseDependency: Firebase}
)

const storeData = {
  plugins: [easyFirestore],
  modules: {
    tabbar: {
      index: 0,
      strict: true,
      namespaced: true,
      state: {
        index: 1
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    }
  },
}

const store = new Vuex.Store(storeData)

// initFirebase
initFirebase()
  .catch(error => {
    console.log(error)
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export default store