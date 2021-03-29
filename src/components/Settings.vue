<template>    
  <v-container 
  class="fill-height"
  fluid
  > 
      <v-row align="center" justify="center">
        <v-col >          
          <v-parallax src="@/assets/fondoazul.jpg" alt="">
            <!-- <v-spacer></v-spacer> -->
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >       
              
            <img src="@/assets/fondo1.png" height="100%">            
            </v-layout>
          </v-parallax>
        </v-col>
      </v-row>

      <!-- <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-card ref="form">
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">Fields to configure the AWS-SDK</div>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    ref="region"
                    autocomplete="off"
                    v-model="region"
                    :rules="[() => !!region || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Region"                   
                    required
                ></v-text-field>
                <v-text-field
                    ref="clientid"
                    v-model="clientid"
                    autocomplete="off"
                    :rules="[() => !!clientid || 'This field is required']"
                    :error-messages="errorMessages"
                    label="ClientId"                   
                    required
                ></v-text-field>
                <v-text-field
                    ref="userpoolid"
                    autocomplete="off"
                    v-model="userpoolid"
                    :rules="[() => !!userpoolid || 'This field is required']"
                    :error-messages="errorMessages"
                    label="UserPoolId"                   
                    required
                ></v-text-field>
                <v-text-field
                    ref="bucket"
                    v-model="bucket"
                    :rules="[() => !!bucket || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Bucket Name"                   
                    required
                ></v-text-field>
                <v-text-field
                    ref="identity"
                    autocomplete="off"
                    v-model="identity"
                    :rules="[() => !!identity || 'This field is required']"
                    :error-messages="errorMessages"
                    label="IdentityPoolId"                   
                    required
                ></v-text-field>
                
                
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn color="primary" text @click.native="submit()">Submit</v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click.native="resetForm()">
                    <v-icon>mdi-refresh</v-icon>
                    Cancel</v-btn>                 
            </v-card-actions>
            </v-card>
        </v-col>
      </v-row> -->
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-card ref="form">
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">Fields to configure access to MinIO</div>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    ref="region"
                    v-model="region"
                    autocomplete="off"
                    
                    :error-messages="errorMessages"
                    label="Minio Enpoint"                   
                    
                ></v-text-field>
                <v-text-field
                    ref="clientid"
                    v-model="clientid"
                    autocomplete="off"
                   
                    :error-messages="errorMessages"
                    label="Port"                   
                    
                ></v-text-field>
                <v-text-field
                    ref="userpoolid"
                    type="password"
                    autocomplete="off"
                    v-model="userpoolid"
                   
                    :error-messages="errorMessages"
                    label="Access Key"                   
                    
                ></v-text-field>
                <v-text-field
                    ref="bucket"
                    type="password"
                    autocomplete="off"
                    v-model="bucket"
                   
                    :error-messages="errorMessages"
                    label="Secret Key"                   
                    
                ></v-text-field>
                
                
                
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn color="primary" text @click.native="submit()">Submit</v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click.native="resetForm()">
                    <v-icon>mdi-refresh</v-icon>
                    Cancel</v-btn>                 
            </v-card-actions>
            </v-card>
        </v-col>
        </v-row>


  </v-container>
</template>

<script> 
 
//  import env from '../env.js'

  export default {
    data: () => ({
        region: null,
        clientid: null,
        userpoolid: null,
        bucket: null,
        identity: null,
        errorMessages:'',   
        formHasErrors: false,  
        user: ""
    }),  
    created(){         
     

        
    },
    watch: {
        name () {
        this.errorMessages = ''
            },
    },
    methods: {    
        submit(){
            
            Object.keys(this.form).forEach(f => {
            if (!this.form[f]){
                this.formHasErrors = true
                this.$refs[f].validate(true)
            } else {
                this.formHasErrors = false
                this.env.COGNITO.region = this.region
                this.env.COGNITO.ClientId = this.clientid
                this.env.COGNITO.UserPoolId = this.userpoolid
                this.env.albumBucketName = this.bucket
                this.env.IdentityPoolId = this.identity
                this.to_dashboard()
            }

        })           
            
        },
        resetForm () {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
        },       
        logout(){        
            this.$router.replace(this.$route.query.redirect || "/logout");        
        },
        to_dashboard(){
          this.$router.replace(this.$route.query.redirect || "/dashboard"); 
        },
        to_settings(){
          this.$router.replace(this.$route.query.redirect || "/settings"); 
        },
        
    }, 
    computed: {
        form () {
      return {
        region: this.region,
        clientid: this.clientid,
        userpoolid: this.userpoolid,
        bucket: this.bucket,
        identity: this.identity,       
      }
    },
       

    }   
}

</script>


