import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import Notifications from 'vue-notification'
// import env from './env.js'
Vue.use(Notifications)

window.axios = require('axios')

// Vue.mixin({
//   data: function(){
//     return {      
//       env:env,      
//     }
//   }
// })
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
