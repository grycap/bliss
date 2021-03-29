<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <!-- <img src="@/assets/icono.png" alt="Vue Material Admin" width="200" height="120"> -->
                  <!-- <h1 class="flex my-4 primary--text">AWS + Machine Learning</h1> -->
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="login" label="MinIO Enpoint" type="text"
                                v-model="model.endpoint" required></v-text-field>
        				  <span v-show="mistake.endpoint" style="color: #cc3300; font-size: 12px;"><b>Endpoint is required</b></span>

                  <v-text-field append-icon="person" name="login" label="Access Key" type="text"
                                v-model="model.access_key" required></v-text-field>
        				  <span v-show="mistake.access_key" style="color: #cc3300; font-size: 12px;"><b>Access Key is required</b></span>

                  <v-text-field append-icon="lock" name="password" label="Secret Key" id="password" type="password"
                                v-model="model.secret_key" v-on:keyup="bindLogin()" required></v-text-field>
         					<span v-show="mistake.secret_key" style="color: #cc3300; font-size: 12px;"><b>Secret Key is required</b></span>
                </v-form>
              </v-card-text>
              <v-card-actions>     
                <v-btn block color="primary" @click.native="login()" :loading="loading">Sign in</v-btn>
              </v-card-actions>              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  data: () => ({
    loading: false,
    model: {
      access_key: '',
      secret_key: '',
      endpoint: ''
    }, 
    mistake: {
      access_key: false,
      secret_key: false
    },
    token_auth : '',
    token : '',
  
    
  }),
  created(){
    localStorage.clear()
  },

  methods: {
    bindLogin(){
      event.preventDefault();
      if (event.keyCode === 13) {
        this.login()
      } 
    },    
    login () {     
    
    if (this.model.access_key == ""){
        this.mistake.access_key = true
    }else {
        this.mistake.access_key = false       
    }

    if(this.model.secret_key == ""){
        this.mistake.secret_key = true    
    }
    else{
        this.mistake.secret_key = false
    }

    if(this.model.endpoint == ""){
        this.mistake.endpoint = true    
    }
    else{
        this.mistake.endpoint = false
    }

    if (this.model.access_key != "" && this.model.secret_key != "" && this.model.endpoint != ""){
          this.loading = true;		         
          localStorage.setItem("session",JSON.stringify({ user: { access_key: this.model.access_key, secret_key: this.model.secret_key, endpoint: this.model.endpoint } }));
          this.$router.push("/dashboard");
          location.reload();
          // this.$router.replace(this.$route.query.redirect || "/dashboard");
    }
    }
  }

}
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
