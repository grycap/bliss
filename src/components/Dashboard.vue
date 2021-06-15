<template>    
	<v-container 
	class="fill-height"
	fluid
	style="background-color: #F0F1F1;"
	>   
	<div  v-show="loading" class="loading-overlay is-active">
		<span class="fa fa-spinner fa-5x fa-spin"></span>
	</div>
		<!-- <v-row align="center" justify="center">
			<v-col >          
				<v-parallax src="@/assets/fondoazul.jpg" alt="">
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
		</v-row> -->
		<v-row style="padding-right:40px; padding-left:40px;" >
			<v-col>
				<v-card style="padding-right:40px; padding-left:40px;">
					<h1 style="padding-top:20px;" class="text-center">Select time to search</h1>
					<v-row style="padding-top:1rem;padding-bottom: 1rem;">
						<v-col style="padding-bottom:1rem;" class="col-12 col-md-6">
							<v-select
								:items="times"
								label="Select ..."
								single-line
								@change="timestamp"
								v-model = select_times
							></v-select>
						</v-col>
						<v-col class="col-12 col-md-6 text-center">
							<v-btn
								color="blue-grey"
								class="ma-2 white--text"
								@click="refresh()"
								>
								Refresh
								<v-icon
									right
									dark
								>
									fa fa-refresh
								</v-icon>
								</v-btn>
						</v-col>
					</v-row>

				</v-card>	
			</v-col>
		</v-row>
		<v-row style="padding-right:40px; padding-left:40px;padding-bottom: 40px;" >
			<v-col>
				<v-card style="padding-right:40px; padding-left:40px;height:75vh;overflow-y: auto;">
					<v-row>

						<v-col class="col-12 col-md-6">
							<h1 style="padding-top:20px;" class="text-center">Input Bucket</h1>

							<v-select 
								:items="buckets"
								label="Select ..."
								single-line
								:disabled='select_disabled'
								@change="inputFilesBucket"
								v-model = inputBucket
							></v-select>

							<v-col v-for="(n, i) in inputURL" :key="i">
								<v-row style="justify-content: center;padding-top:10px;" >
									<span >{{n.file_name}}</span>
									<v-btn
										icon
										color="blue"
										@click="download(n.url,n.file_name)"
									>
										<v-icon>fa fa-download</v-icon>
									</v-btn>

								</v-row>
								<v-img 
									style="margin-top: 15px;"
									:src="n.url"
									height="300"
									contain
									aspect-ratio="1"
								></v-img>
							</v-col>
						</v-col>
						<v-col class="col-12 col-md-6">
							<h1  style="padding-top:20px;" class="text-center">Output Bucket</h1>
							<v-select
								:items="buckets"
								label="Select ..."
								single-line
								:disabled='select_disabled'
								@change="outputFilesBucket"
								v-model = outputBucket
							></v-select>

							<v-col v-for="(n, i) in outputURL" :key="i">
								<v-row style="justify-content: center;padding-top:10px;" >
									<span>{{n.file_name}}</span>
									<v-btn
										icon
										color="blue"
										@click="download(n.url,n.file_name)"
									>
										<v-icon>fa fa-download</v-icon>
									</v-btn>
								</v-row>
								<v-img 
									style="margin-top: 15px;"
									:src="n.url"
									height="300"
									contain
									aspect-ratio="1"
								></v-img>
							</v-col>
						</v-col>
					</v-row>

				</v-card>

			</v-col>

		</v-row>
		</v-container>
</template>

<script>
  
 import axios from 'axios';
 import moment from 'moment';
 import vue2Dropzone from 'vue2-dropzone';
 import 'vue2-dropzone/dist/vue2Dropzone.min.css';
 import Services from './services';
 
  export default {
    components: {
    vueDropzone: vue2Dropzone
    },
	mixins:[Services],
    
    data: () => ({
		buckets:[],
		dropzoneOptions: {
			url: 'https://httpbin.org/post',
			thumbnailWidth: 150,
			// maxFilesize: 0.5,          
			addRemoveLinks: true, 
			destroyDropzone: false,
		},
		loading: false,
		inputBucket: '',
		outputBucket: '',
		inputURL : [],
		outputURL : [],
		select_disabled: true,
		select_times : '',
		times:['Last hour', 'Last Day', 'Last Week', 'Last Month', 'All'],
		get_input_url: [],
		get_output_url: [],

	 
                       
    }),  
    created(){      
		this.loading = true;
		this.getBucketListCall(this.getBucketListCallBack)
		//   this.listBuckets();
		//   this.getfiles();

		this.$vuetify.theme.light = true 
		var current= new Date(document.lastModified);          
		this.lastupdate = moment(current).format("MMMM Do YYYY, h:mm:ss a")

      
    },
    watch: {      
      		  
        

    },
    methods: {   

		refresh(){
			if(this.inputBucket != '' && this.inputBucket != 0 ){
				this.inputFilesBucket();

			}
			if(this.outputBucket != '' && this.outputBucket != 0 ){
				this.outputFilesBucket();

			}
		},
		
		timestamp(item){
			if(item != ''){
				// this.select_times = item;
				this.select_disabled = false;
				this.inputBucket = 0;
				this.outputBucket = 0;
				this.inputURL = [];
				this.outputURL = [];
			}else{
				this.select_disabled = true;
			}
		},

		getBucketListCallBack(response){
			if(response.length > 0){
				for (let i = 0; i < response.length; i++) {
					this.buckets.push(response[i].name)
				}
			}else{
				console.log("error")
			}
			this.loading = false;
		},

		inputFilesBucket(item){
			this.loading = true;
			this.inputURL = [];
			// this.inputBucket = item;
			var params = {
				name: this.inputBucket,
				prefix: ''
			}
			this.getBucketFilesCall(params,this.getBucketInputFilesCallBack)
		},

		outputFilesBucket(item){
			this.loading = true;
			this.outputURL = [];
			// this.outputBucket = item;
			var params = {
				name: this.outputBucket,
				prefix: ''
			}
			this.getBucketFilesCall(params,this.getBucketOutputFilesCallBack)
		},


		getBucketInputFilesCallBack(response){
			console.log(response)
			console.log(this.select_times)
			if(response.err == ''){
				this.get_input_url = [];
				if(this.select_times == 'Last hour'){
					var time_to_set = 60 * 60 * 1000;

				}else if(this.select_times == 'Last Day'){
					var time_to_set = 60 * 60 * 24 * 1000;
				}else if(this.select_times == 'Last Week'){
					var time_to_set = 60 * 60 * 24 * 7 * 1000;
				}else if(this.select_times == 'Last Month'){
					var time_to_set = 60 * 60 * 24 * 30 * 1000;
				}
				for (let i = 0; i < response.files.length; i++) {
					if(this.select_times == 'All'){
						this.get_input_url.push(response.files[i])
					}else{
						var now = +new Date();
						let lastModified = moment(response.files[i].lastModified).format('X');
						var compareDatesBoolean = (now - lastModified*1000) < time_to_set;
						if(compareDatesBoolean == true){
							this.get_input_url.push(response.files[i])
						}
					}
					
					
					
				}
				console.log(this.get_input_url)
				for (let z = 0; z < this.get_input_url.length; z++) {
					var params = {
						bucketName: this.inputBucket, 
						fileName: this.get_input_url[z].name
					}
					this.previewFileCall(params,this.previewInputFileCallBack);
					
				}
			}
			this.loading = false;
		},

		previewInputFileCallBack(response){
			if(response.file_name != '' && response.url != ''){
				this.inputURL.push(response);
			}else{
				console.log('error');
			}
		},

		getBucketOutputFilesCallBack(response){
			console.log(response)
			console.log(this.select_times)
			if(response.err == ''){
				this.get_output_url = [];
				if(this.select_times == 'Last hour'){
					var time_to_set = 60 * 60 * 1000;

				}else if(this.select_times == 'Last Day'){
					var time_to_set = 60 * 60 * 24 * 1000;
				}else if(this.select_times == 'Last Week'){
					var time_to_set = 60 * 60 * 24 * 7 * 1000;
				}else if(this.select_times == 'Last Month'){
					var time_to_set = 60 * 60 * 24 * 30 * 1000;
				}
				for (let i = 0; i < response.files.length; i++) {
					if(this.select_times == 'All'){
						this.get_output_url.push(response.files[i])
					}else{
						var now = +new Date();
						let lastModified = moment(response.files[i].lastModified).format('X');
						var compareDatesBoolean = (now - lastModified*1000) < time_to_set;
					
						if(compareDatesBoolean == true){
							this.get_output_url.push(response.files[i])
						}
					}
					
					
					
				}
				for (let z = 0; z < this.get_output_url.length; z++) {
					var params = {
						bucketName: this.outputBucket, 
						fileName: this.get_output_url[z].name
					}
					this.previewFileCall(params,this.previewOutputFileCallBack);
					
				}
			}
			this.loading = false;
		},

		previewOutputFileCallBack(response){
			console.log(response)
			if(response.file_name != '' && response.url != ''){
				this.outputURL.push(response);
			}else{
				console.log('error');
			}
			console.log(this.outputURL)
		},

		download(url,file_name){
			this.downloadFileCall(url,file_name, this.downloadFileCallBack)
		},

		downloadFileCallBack(response){
			console.log(response)
			var _this = this;
			const url = window.URL.createObjectURL(new Blob([response.data.data]))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', response.file) //or any other extension
			document.body.appendChild(link)
			link.click()
		},
	

		
       
    },    
    computed: {
		showSelectedFiles () {
			// return this.files.length > 0
			return this.files.length > 0
			},      
		size () {
		const size = {xs:'x-small',sm:'small',lg:'large'}[this.$vuetify.breakpoint.name];
		return size ? { [size]: true } : {}
		}
  
    }
}

</script>

<style>
 .loading-overlay {
  display: none;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9998;
  align-items: center;
  justify-content: center;
}

.loading-overlay.is-active {
  display: flex;
}

</style>

