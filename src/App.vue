<template>
  <v-app >
    <notifications  />
    <layout v-if="loggedIn"></layout>
      <login v-else></login>
  </v-app>
</template>

<script>
import Layout from './components/Layout';
import Login from './components/auth/login/Login';
import jwtDecode from "jwt-decode";
export default {
  name: 'App',

  components: {
    Layout,
    Login
  },
  data (){
    return {
      loggedIn: false
    }
  },
  created() { 
    if (typeof localStorage.getItem("session") != "undefined") {
      var session = JSON.parse(localStorage.getItem("session"));
			if ((session != null  && typeof session.user.access_key != "undefined" && typeof session.user.secret_key != "undefined"  && typeof session.user.endpoint != "undefined")) {
        console.log(this.loggedIn)
        this.loggedIn = true;
				console.log(session.user);
				// $(".users-dropdown").text(session.user.username);
			}        
    }else {
      this.loggedIn = false
    }
    },
  mounted() {
    console.log(localStorage.getItem("session"));
    if (typeof localStorage.getItem("session") != "undefined") {
      var session = JSON.parse(localStorage.getItem("session"));
			if ((session != null  && typeof session.user.access_key != "undefined" && typeof session.user.secret_key != "undefined"  && typeof session.user.endpoint != "undefined")) {
        console.log(this.loggedIn)
        this.loggedIn = true;
				console.log(session.user);
				// $(".users-dropdown").text(session.user.username);
			}        
    }else {
      this.loggedIn = false
    }
  },
};
</script>
<style lang="scss">

.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #EAF4FE;
  border: 1px solid #D4E8FD;
  
  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    color: #2589F3;
  }
}

  
</style>
