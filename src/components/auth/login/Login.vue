<template>
  <v-app id="login" class="custom-color">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center" style="padding-bottom:10px;">
                  <v-img
                    max-height="150"
                    max-width="250"
                    src="@/assets/logo_all_name.png"
                  ></v-img>
                                    <!-- <v-img src="@/assets/logo_all_name.png" alt="Vue Material Admin" width="400" height="120" style=""> -->
                  <!-- <h1 class="flex my-4 primary--text">AWS + Machine Learning</h1> -->
                </div>
                <v-form>
                  <v-text-field append-icon="mdi-web" name="login" label="MinIO Enpoint" type="text"
                                v-model="model.endpoint" required></v-text-field>

        				  <span v-show="mistake.endpoint" style="color: #cc3300; font-size: 12px;"><b>Port</b></span>
                  <v-text-field append-icon="mdi-web-box" name="login" label="MinIO Port" type="text"
                                v-model="model.port" required></v-text-field>

                  <v-text-field append-icon="mdi-account-arrow-right" name="login" label="Access Key" type="text"
                                v-model="model.access_key" required placeholder=" "></v-text-field>
        				  <span v-show="mistake.access_key" style="color: #cc3300; font-size: 12px;"><b>Access Key is required</b></span>

                  <v-text-field append-icon="lock" name="password" label="Secret Key" id="password" type="password"
                                v-model="model.secret_key" v-on:keyup="bindLogin()" required placeholder=" "></v-text-field>
         					<span v-show="mistake.secret_key" style="color: #cc3300; font-size: 12px;"><b>Secret Key is required</b></span>
                </v-form>
              </v-card-text>
              <v-card-actions>     
                <v-btn block style="background-color:rgb(64, 78, 103);color:white;" @click.native="login()" :loading="loading">Sign in</v-btn>
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
import axios from 'axios';
// import Services from '../../services';
export default {
  // mixins:[Services],
  data: () => ({
    loading: false,
    model: {
      access_key: '',
      secret_key: '',
      endpoint: '',
      port:''
    }, 
    mistake: {
      access_key: false,
      secret_key: false
    },
    token_auth : '',
    token : '',
  
    
  }),
  mounted(){
    const queryString = window.location.href;
    var url = new URL(queryString);
    // example: http://localhost:8080/?ak=434343&minioEndpoint=https%3A%2F%2Fadc.com&minioPort=2344#/login?redirect=%2F
    this.model.access_key = url.searchParams.get('ak');
    this.model.endpoint = url.searchParams.get('minioEndpoint');
    this.model.port = url.searchParams.get('minioPort');
  },
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
            axios({url:'https://'+this.model.endpoint+':'+this.model.port+'/minio/health/cluster',method:'GET'})
              .then(response => {
                  console.log(response)
                  localStorage.setItem("session",JSON.stringify({ user: { access_key: this.model.access_key, secret_key: this.model.secret_key, endpoint: this.model.endpoint, port:this.model.port } }));
                  this.$router.push("/dashboard");
                  location.reload();
                  // this.getBucketListCall(this.getBucketListCallBack)
                 
                // this.$router.replace(this.$route.query.redirect || "/dashboard");
              }).catch(error => {
                  console.log(error)
                   this.loading = false;
                   this.notifyVue("Error with credentials",'nc-icon nc-simple-remove','danger') 
                    this.model.endpoint = ''
                    this.model.port = ''
                    this.model.access_key = ''
                    this.model.secret_key = ''
                  // this.getBucketListCall(this.getBucketListCallBack)
              });
                  
          
      }
    },
    getBucketListCallBack(response){
			console.log(response.status)
			if(response.length > 0){
				 this.$router.push("/dashboard");
          location.reload();
			}else{
				console.log("error")
			  this.loading = false;
        this.notifyVue("Error with credentials",'nc-icon nc-simple-remove','danger') 
        this.model.endpoint = ''
        this.model.port = ''
        this.model.access_key = ''
        this.model.secret_key = ''

			}
		},
    notifyVue (message) {
        console.log('here')
        this.$notify(
          {
            title: "Error",
            text: message,            
            duration:2000,
            position:"top right",
            type: 'error',
            classess: "n-light"
          })
      },
  }

}
</script>
<style scoped lang="scss">
  .custom-color{
    background-color: rgb(64, 78, 103)!important;
    border-color: rgb(64, 78, 103);
  }
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
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
