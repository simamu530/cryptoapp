import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

var firebaseConfig = {
    apiKey: "AIzaSyBsEHXktW2uNTYKb6TBam87wBdbEU3SNm4",
    authDomain: "cryptoapp-b559b.firebaseapp.com",
    projectId: "cryptoapp-b559b",
    storageBucket: "cryptoapp-b559b.appspot.com",
    messagingSenderId: "459695518719",
    appId: "1:459695518719:web:04f4a7b90ccdb454a06dca"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
