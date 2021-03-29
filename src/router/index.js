import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/login/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import Settings from '@/components/Settings.vue'


Vue.use(Router)

function requireAuth (to, from, next) {
    var session = JSON.parse(localStorage.getItem("session"));
    if ((session != null  && typeof session.user.access_key != "undefined" && typeof session.user.secret_key != "undefined"  && typeof session.user.endpoint != "undefined")) {
      next();
    }else{
      next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
    }      
    // var id_token = JSON.parse(localStorage.getItem("token_id"));
    // if (id_token != null){
    //   next()
    // }else {
    //   cognitoAuth.isAuthenticated((err, loggedIn) => {
    //     if (err) return next()
    //     if (!loggedIn) {
    //       next({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //       })
    //     } else {
    //       next()
    //     }
    //   })
    // }

  }

  export default new Router({
    linkActiveClass: 'active', 
    // mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Dashboard, beforeEnter: requireAuth  },
      { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
      // { path: '/dashboard', component: Dashboard },
      {path : '/settings', component: Settings, beforeEnter: requireAuth },      
      { path: '/login', component: Login},
            
      { path: '/logout',
        beforeEnter (to, from, next) {
          localStorage.clear();
          location.reload();
          // next('/login')
        }
      }
    ],    
  })