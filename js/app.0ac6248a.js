(function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"02ce":function(e,t,s){},"0c7c":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-overlay is-active"},[n("span",{staticClass:"fa fa-spinner fa-5x fa-spin"})]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-parallax",{attrs:{src:s("855d"),alt:""}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("img",{attrs:{src:s("3888"),height:"100%"}})])],1)],1)],1),n("v-row",{staticStyle:{"padding-right":"40px","padding-left":"40px"}},[n("v-col",[n("v-card",{staticStyle:{"padding-right":"40px","padding-left":"40px"}},[n("h1",{staticClass:"text-center",staticStyle:{"padding-top":"20px"}},[e._v("Select time to search")]),n("v-select",{attrs:{items:e.times,label:"Select ...","single-line":""},on:{change:e.timestamp}})],1)],1)],1),n("v-row",{staticStyle:{"padding-right":"40px","padding-left":"40px"}},[n("v-col",{staticClass:"col-12 col-md-6"},[n("v-card",{staticStyle:{"padding-right":"40px","padding-left":"40px",height:"75vh","overflow-y":"auto"}},[n("h1",{staticClass:"text-center",staticStyle:{"padding-top":"20px"}},[e._v("Input Bucket")]),n("v-select",{attrs:{items:e.buckets,label:"Select ...","single-line":"",disabled:e.select_disabled},on:{change:e.inputFilesBucket}}),e._l(e.inputURL,(function(t,s){return n("v-col",{key:s},[n("v-row",{staticStyle:{"justify-content":"center"}},[n("span",[e._v(e._s(t.file_name))]),n("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(s){return e.download(t.url,t.file_name)}}},[n("v-icon",[e._v("fa fa-download")])],1)],1),n("v-img",{staticStyle:{"margin-top":"15px"},attrs:{src:t.url,height:"300",contain:"","aspect-ratio":"1"}})],1)}))],2)],1),n("v-col",{staticClass:"col-12 col-md-6"},[n("v-card",{staticStyle:{"padding-right":"40px","padding-left":"40px",height:"75vh","overflow-y":"auto"}},[n("h1",{staticClass:"text-center",staticStyle:{"padding-top":"20px"}},[e._v("Output Bucket")]),n("v-select",{attrs:{items:e.buckets,label:"Select ...","single-line":"",disabled:e.select_disabled},on:{change:e.outputFilesBucket}}),e._l(e.outputURL,(function(t,s){return n("v-col",{key:s},[n("span",[e._v(e._s(t.file_name))]),n("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(s){return e.download(t.url,t.file_name)}}},[n("v-icon",[e._v("fa fa-download")])],1),n("v-img",{attrs:{src:t.url,height:"300",contain:"","aspect-ratio":"1"}})],1)}))],2)],1)],1)],1)},a=[],o=s("ade3"),r=(s("b0c0"),s("2b3d"),s("d3b7"),s("3ca3"),s("ddb0"),s("bc3a"),s("c1df")),l=s.n(r),c=s("92c3"),u=s.n(c),d=(s("1e3f"),{data:function(){return{api:"",minioClient:"",username_auth:"",password_auth:""}},created:function(){var e=JSON.parse(localStorage.getItem("session"));null!=e&&"undefined"!=typeof e.user.access_key&&"undefined"!=typeof e.user.secret_key&&"undefined"!=typeof e.user.endpoint&&(console.log(this.loggedIn),this.loggedIn=!0,console.log(e.user));var t=s("ad23");this.minioClient=new t.Client({endPoint:e.user.endpoint,port:e.user.port,accessKey:e.user.access_key,secretKey:e.user.secret_key})},methods:{getBucketListCall:function(e){this.minioClient.listBuckets((function(t,s){e(t||s)}))},createBucketCall:function(e,t){this.minioClient.makeBucket(e.name,(function(e,s){t(e||"success")}))},bucketExistCall:function(e,t){this.minioClient.bucketExists(e.name,(function(e,s){e?(t(e),window.getApp.$emit("APP_SHOW_SNACKBAR",{text:e.message,color:"error"})):t("success")}))},getBucketFilesCall:function(e,t){var s=this.minioClient.listObjectsV2(e.name,e.prefix,!0),n={err:"",files:[]};s.on("data",(function(e){n.files.push(e)})),s.on("error",(function(e){n["err"]=e})),s.on("end",(function(e){t(n)}))},previewFileCall:function(e,t){this.minioClient.presignedUrl("GET",e.bucketName,e.fileName,3e4,(function(s,n){if(s)t(s);else{var a={file_name:e.fileName,url:n};t(a)}}))},urlToPromise:function(e){return new Promise((function(t,s){JSZipUtils.getBinaryContent(e,(function(e,n){e?s(e):t(n)}))}))},downloadFileCall:function(e,t,s){axios({url:e,method:"GET",responseType:"blob"}).then((function(e){var n={file:t,data:e};s(n)}))},uploadFileCall:function(e,t){this.minioClient.presignedPutObject(e.bucketName,e.file_name,86400,(function(s,n){s?console.log(s):fetch(n,{method:"PUT",body:e.file}).then((function(){t("uploaded")})).catch((function(e){t(e)}))}))},removeFileCall:function(e,t){var s=[];s=e.fileName;for(var n=0;n<s.length;n++)this.minioClient.removeObject(e.bucketName,s[n],(function(e,s){t(e?error:"success")}))},removeBucketCall:function(e,t){var s=[],n=this,a=this.minioClient.listObjectsV2(e,"",!0);a.on("data",(function(e){s.push(e.name)})),a.on("error",(function(e){console.log(e)})),a.on("end",(function(){var a=s.length;if(0!=s.length)for(var i=0;i<s.length;i++)n.minioClient.removeObject(e,s[i],(function(s){if(s)return console.log("Unable to remove Objects ",s);a-=1,0==a&&n.minioClient.removeBucket(e,(function(e,s){t(e||"success")}))})),console.log("Removed the objects successfully");else n.minioClient.removeBucket(e,(function(e,s){console.log(e),t(e||"success")}))}))}}}),f={components:{vueDropzone:u.a},mixins:[d],data:function(){return{buckets:[],dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:150,addRemoveLinks:!0,destroyDropzone:!1},loading:!1,inputBucket:"",outputBucket:"",inputURL:[],outputURL:[],select_disabled:!0,select_times:"",times:["Last hour","Last Day","Last Week","Last Month","All"],get_input_url:[],get_output_url:[]}},created:function(){this.loading=!0,this.getBucketListCall(this.getBucketListCallBack),this.$vuetify.theme.light=!0;var e=new Date(document.lastModified);this.lastupdate=l()(e).format("MMMM Do YYYY, h:mm:ss a")},watch:{},methods:{timestamp:function(e){""!=e&&(this.select_times=e,this.select_disabled=!1)},getBucketListCallBack:function(e){if(e.length>0)for(var t=0;t<e.length;t++)this.buckets.push(e[t].name);else console.log("error");this.loading=!1},inputFilesBucket:function(e){this.loading=!0,this.inputBucket=e;var t={name:e,prefix:""};this.getBucketFilesCall(t,this.getBucketInputFilesCallBack)},outputFilesBucket:function(e){this.loading=!0,this.outputBucket=e;var t={name:e,prefix:""};this.getBucketFilesCall(t,this.getBucketOutputFilesCallBack)},getBucketInputFilesCallBack:function(e){if(console.log(e),""==e.err){if("Last hour"==this.select_time)var t=36e5;for(var s=0;s<e.files.length;s++){var n=+new Date,a=l()(e.files[s].lastModified).format("X");console.log(n),console.log(a);var o=n-a<t;console.log(o),1==o&&this.get_input_url.push(e.files[s])}console.log(this.get_input_url);for(var r=0;r<this.get_input_url.length;r++){var c={bucketName:this.inputBucket,fileName:this.get_input_url[i].name};this.previewFileCall(c,this.previewInputFileCallBack)}}this.loading=!1},previewInputFileCallBack:function(e){console.log(e),""!=e.file_name&&""!=e.url?this.inputURL.push(e):console.log("error")},getBucketOutputFilesCallBack:function(e){if(console.log(e),""==e.err)for(var t=0;t<e.files.length;t++){var s={bucketName:this.outputBucket,fileName:e.files[t].name};this.previewFileCall(s,this.previewOutputFileCallBack)}this.loading=!1},previewOutputFileCallBack:function(e){console.log(e),""!=e.file_name&&""!=e.url?this.outputURL.push(e):console.log("error"),console.log(this.outputURL)},download:function(e,t){this.downloadFileCall(e,t,this.downloadFileCallBack)},downloadFileCallBack:function(e){console.log(e);var t=window.URL.createObjectURL(new Blob([e.data.data])),s=document.createElement("a");s.href=t,s.setAttribute("download",e.file),document.body.appendChild(s),s.click()}},computed:{showSelectedFiles:function(){return this.files.length>0},size:function(){var e={xs:"x-small",sm:"small",lg:"large"}[this.$vuetify.breakpoint.name];return e?Object(o["a"])({},e,!0):{}}}},p=f,m=(s("2fe3"),s("2877")),v=s("6544"),h=s.n(v),b=s("8336"),g=s("b0af"),y=s("62ad"),k=s("a523"),j=s("132d"),_=s("adda"),x=s("a722"),C=s("8b9c"),w=s("0fd9"),S=s("b974"),V=Object(m["a"])(p,n,a,!1,null,null,null);t["a"]=V.exports;h()(V,{VBtn:b["a"],VCard:g["a"],VCol:y["a"],VContainer:k["a"],VIcon:j["a"],VImg:_["a"],VLayout:x["a"],VParallax:C["a"],VRow:w["a"],VSelect:S["a"]})},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},2049:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",{staticClass:"primary",attrs:{id:"login"}},[s("v-content",[s("v-container",{attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:"",lg4:""}},[s("v-card",{staticClass:"elevation-1 pa-3"},[s("v-card-text",[s("div",{staticClass:"layout column align-center"}),s("v-form",[s("v-text-field",{attrs:{"append-icon":"person",name:"login",label:"MinIO Enpoint",type:"text",required:""},model:{value:e.model.endpoint,callback:function(t){e.$set(e.model,"endpoint",t)},expression:"model.endpoint"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.mistake.endpoint,expression:"mistake.endpoint"}],staticStyle:{color:"#cc3300","font-size":"12px"}},[s("b",[e._v("Port")])]),s("v-text-field",{attrs:{"append-icon":"person",name:"login",label:"MinIO Port",type:"text",required:""},model:{value:e.model.port,callback:function(t){e.$set(e.model,"port",t)},expression:"model.port"}}),s("v-text-field",{attrs:{"append-icon":"person",name:"login",label:"Access Key",type:"text",required:""},model:{value:e.model.access_key,callback:function(t){e.$set(e.model,"access_key",t)},expression:"model.access_key"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.mistake.access_key,expression:"mistake.access_key"}],staticStyle:{color:"#cc3300","font-size":"12px"}},[s("b",[e._v("Access Key is required")])]),s("v-text-field",{attrs:{"append-icon":"lock",name:"password",label:"Secret Key",id:"password",type:"password",required:""},on:{keyup:function(t){return e.bindLogin()}},model:{value:e.model.secret_key,callback:function(t){e.$set(e.model,"secret_key",t)},expression:"model.secret_key"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.mistake.secret_key,expression:"mistake.secret_key"}],staticStyle:{color:"#cc3300","font-size":"12px"}},[s("b",[e._v("Secret Key is required")])])],1)],1),s("v-card-actions",[s("v-btn",{attrs:{block:"",color:"primary",loading:e.loading},nativeOn:{click:function(t){return e.login()}}},[e._v("Sign in")])],1)],1)],1)],1)],1)],1)],1)},a=[],i=(s("04e1"),{data:function(){return{loading:!1,model:{access_key:"",secret_key:"",endpoint:"",port:""},mistake:{access_key:!1,secret_key:!1},token_auth:"",token:""}},created:function(){localStorage.clear()},methods:{bindLogin:function(){event.preventDefault(),13===event.keyCode&&this.login()},login:function(){""==this.model.access_key?this.mistake.access_key=!0:this.mistake.access_key=!1,""==this.model.secret_key?this.mistake.secret_key=!0:this.mistake.secret_key=!1,""==this.model.endpoint?this.mistake.endpoint=!0:this.mistake.endpoint=!1,""!=this.model.access_key&&""!=this.model.secret_key&&""!=this.model.endpoint&&(this.loading=!0,localStorage.setItem("session",JSON.stringify({user:{access_key:this.model.access_key,secret_key:this.model.secret_key,endpoint:this.model.endpoint,port:this.model.port}})),this.$router.push("/dashboard"),location.reload())}}}),o=i,r=(s("e821"),s("2877")),l=s("6544"),c=s.n(l),u=s("7496"),d=s("8336"),f=s("b0af"),p=s("99d9"),m=s("a523"),v=s("a75b"),h=s("0e8f"),b=s("4bd4"),g=s("a722"),y=s("8654"),k=Object(r["a"])(o,n,a,!1,null,"aa4c8832",null);t["a"]=k.exports;c()(k,{VApp:u["a"],VBtn:d["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VContainer:m["a"],VContent:v["a"],VFlex:h["a"],VForm:b["a"],VLayout:g["a"],VTextField:y["a"]})},"2fe3":function(e,t,s){"use strict";s("02ce")},3:function(e,t){},3888:function(e,t,s){e.exports=s.p+"img/fondo1.dc812ca3.png"},4:function(e,t){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},5:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[e.loggedIn?s("layout"):s("login")],1)},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[s("v-list",{attrs:{dense:""}},[s("v-list-item",[s("v-list-item-action",[s("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.to_dashboard()}}},[s("v-icon",{attrs:{color:"blue lighten-1"}},[e._v("dashboard")]),e._v(" Dashboard ")],1)],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.to_settings()}}},[s("v-icon",{attrs:{color:"blue lighten-1"}},[e._v("settings")]),e._v(" Settings ")],1)],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.logout()}}},[s("v-icon",{attrs:{color:"blue lighten-1"}},[e._v("logout")]),e._v(" Log Out ")],1)],1)],1)],1)],1),s("v-app-bar",{attrs:{app:"","clipped-left":"",color:"#404E67"}},[s("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),s("v-toolbar-title",{staticStyle:{color:"white"}},[e._v("BLISS - Bucket-based Listed Images Side-to-Side")]),s("v-spacer")],1),s("v-content",[s("router-view")],1),s("section",[s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{staticClass:"my-12",attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[e._v("Application info")])]),s("v-card-text",[e._v(" The web interface allows you to list the input and output bucket images in MinIO and Amazon S3. ")])],1)],1),s("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[s("div",{staticClass:"headline"},[e._v("Contact us")])]),s("v-card-text",{staticStyle:{padding:"0px"}},[e._v(" Grupo de Grid y Computación de Altas Prestaciones (GRyCAP) ")]),s("v-list",{staticClass:"transparent"},[s("v-list-item",{staticStyle:{margin:"0px"}},[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[e._v("mdi-phone")])],1),s("v-list-item-content",[s("v-list-item-title",[e._v("(+34) 963877356")])],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[e._v("mdi-map-marker")])],1),s("v-list-item-content",[s("v-list-item-title",[e._v("Valencia, Spain")])],1)],1),s("v-list-item",[s("v-list-item-action",[s("v-icon",{staticClass:"blue--text text--lighten-2"},[e._v("mdi-email")])],1),s("v-list-item-content",[s("v-list-item-title",[e._v("grycap@grycap.upv.es")])],1)],1)],1)],1)],1)],1)],1)],1),s("v-footer",{attrs:{app:"",color:"#404E67"}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{staticStyle:{padding:"10px 0 10px 0"},attrs:{xs12:""}},[s("div",{staticClass:"white--text ml-4"},[s("h5",[e._v("© 2021, "),s("a",{staticStyle:{color:"#ff9966"},attrs:{href:"https://www.grycap.upv.es"}},[e._v("GRyCAP-I3M-UPV")]),e._v(", Universitat Politècnica de Valéncia, Spain.")])])])],1)],1)],1)},r=[],l=(s("5319"),s("ac1f"),s("04e1"),{props:{source:String},data:function(){return{drawer:null,user:""}},created:function(){this.user=""},methods:{logout:function(){this.$router.replace(this.$route.query.redirect||"/logout").catch((function(e){console.log("You are Log Out!")}))},to_dashboard:function(){this.$router.replace(this.$route.query.redirect||"/dashboard")},to_settings:function(){this.$router.replace(this.$route.query.redirect||"/settings")}}}),c=l,u=s("2877"),d=s("6544"),f=s.n(d),p=s("40dc"),m=s("5bc1"),v=s("8336"),h=s("b0af"),b=s("99d9"),g=s("a523"),y=s("a75b"),k=s("0e8f"),j=s("553a"),_=s("132d"),x=s("a722"),C=s("8860"),w=s("da13"),S=s("1800"),V=s("5d23"),O=s("f774"),B=s("2fa4"),I=s("2a7f"),L=Object(u["a"])(c,o,r,!1,null,null,null),F=L.exports;f()(L,{VAppBar:p["a"],VAppBarNavIcon:m["a"],VBtn:v["a"],VCard:h["a"],VCardText:b["b"],VCardTitle:b["c"],VContainer:g["a"],VContent:y["a"],VFlex:k["a"],VFooter:j["a"],VIcon:_["a"],VLayout:x["a"],VList:C["a"],VListItem:w["a"],VListItemAction:S["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VNavigationDrawer:O["a"],VSpacer:B["a"],VToolbarTitle:I["a"]});var z=s("2049"),N={name:"App",components:{Layout:F,Login:z["a"]},data:function(){return{loggedIn:!1}},created:function(){if("undefined"!=typeof localStorage.getItem("session")){var e=JSON.parse(localStorage.getItem("session"));null!=e&&"undefined"!=typeof e.user.access_key&&"undefined"!=typeof e.user.secret_key&&"undefined"!=typeof e.user.endpoint&&(console.log(this.loggedIn),this.loggedIn=!0,console.log(e.user))}else this.loggedIn=!1},mounted:function(){if(console.log(localStorage.getItem("session")),"undefined"!=typeof localStorage.getItem("session")){var e=JSON.parse(localStorage.getItem("session"));null!=e&&"undefined"!=typeof e.user.access_key&&"undefined"!=typeof e.user.secret_key&&"undefined"!=typeof e.user.endpoint&&(console.log(this.loggedIn),this.loggedIn=!0,console.log(e.user))}else this.loggedIn=!1}},P=N,$=s("7496"),E=Object(u["a"])(P,a,i,!1,null,null,null),M=E.exports;f()(E,{VApp:$["a"]});var A=s("f309");n["a"].use(A["a"]);var T=new A["a"]({}),U=s("a18c");window.axios=s("bc3a"),n["a"].config.productionTip=!1,new n["a"]({vuetify:T,router:U["a"],render:function(e){return e(M)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"855d":function(e,t,s){e.exports=s.p+"img/fondoazul.da436a8f.jpg"},9:function(e,t){},a18c:function(e,t,s){"use strict";(function(e){var n=s("2b0e"),a=s("8c4f"),i=s("2049"),o=s("0c7c"),r=s("f9ea");function l(e,t,s){var n=JSON.parse(localStorage.getItem("session"));null!=n&&"undefined"!=typeof n.user.access_key&&"undefined"!=typeof n.user.secret_key&&"undefined"!=typeof n.user.endpoint?s():s({path:"/login",query:{redirect:e.fullPath}})}n["a"].use(a["a"]),t["a"]=new a["a"]({linkActiveClass:"active",base:e,routes:[{path:"/",component:o["a"],beforeEnter:l},{path:"/dashboard",component:o["a"],beforeEnter:l},{path:"/settings",component:r["a"],beforeEnter:l},{path:"/login",component:i["a"]},{path:"/logout",beforeEnter:function(e,t,s){localStorage.clear(),location.reload()}}]})}).call(this,"/")},d8b2:function(e,t,s){},e821:function(e,t,s){"use strict";s("d8b2")},f9ea:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("v-parallax",{attrs:{src:s("855d"),alt:""}},[n("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[n("img",{attrs:{src:s("3888"),height:"100%"}})])],1)],1)],1),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[n("v-card",{ref:"form"},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[e._v("Fields to configure access to MinIO")])]),n("v-card-text",[n("v-text-field",{ref:"region",attrs:{autocomplete:"off","error-messages":e.errorMessages,label:"Minio Enpoint"},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}}),n("v-text-field",{ref:"clientid",attrs:{autocomplete:"off","error-messages":e.errorMessages,label:"Port"},model:{value:e.clientid,callback:function(t){e.clientid=t},expression:"clientid"}}),n("v-text-field",{ref:"userpoolid",attrs:{type:"password",autocomplete:"off","error-messages":e.errorMessages,label:"Access Key"},model:{value:e.userpoolid,callback:function(t){e.userpoolid=t},expression:"userpoolid"}}),n("v-text-field",{ref:"bucket",attrs:{type:"password",autocomplete:"off","error-messages":e.errorMessages,label:"Secret Key"},model:{value:e.bucket,callback:function(t){e.bucket=t},expression:"bucket"}})],1),n("v-divider",{staticClass:"mt-12"}),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},nativeOn:{click:function(t){return e.submit()}}},[e._v("Submit")]),n("v-spacer"),n("v-btn",{attrs:{text:""},nativeOn:{click:function(t){return e.resetForm()}}},[n("v-icon",[e._v("mdi-refresh")]),e._v(" Cancel")],1)],1)],1)],1)],1)],1)},a=[],i=(s("159b"),s("b64b"),s("5319"),s("ac1f"),{data:function(){return{region:null,clientid:null,userpoolid:null,bucket:null,identity:null,errorMessages:"",formHasErrors:!1,user:""}},created:function(){},watch:{name:function(){this.errorMessages=""}},methods:{submit:function(){var e=this;Object.keys(this.form).forEach((function(t){e.form[t]?(e.formHasErrors=!1,e.env.COGNITO.region=e.region,e.env.COGNITO.ClientId=e.clientid,e.env.COGNITO.UserPoolId=e.userpoolid,e.env.albumBucketName=e.bucket,e.env.IdentityPoolId=e.identity,e.to_dashboard()):(e.formHasErrors=!0,e.$refs[t].validate(!0))}))},resetForm:function(){var e=this;this.errorMessages=[],this.formHasErrors=!1,Object.keys(this.form).forEach((function(t){e.$refs[t].reset()}))},logout:function(){this.$router.replace(this.$route.query.redirect||"/logout")},to_dashboard:function(){this.$router.replace(this.$route.query.redirect||"/dashboard")},to_settings:function(){this.$router.replace(this.$route.query.redirect||"/settings")}},computed:{form:function(){return{region:this.region,clientid:this.clientid,userpoolid:this.userpoolid,bucket:this.bucket,identity:this.identity}}}}),o=i,r=s("2877"),l=s("6544"),c=s.n(l),u=s("8336"),d=s("b0af"),f=s("99d9"),p=s("62ad"),m=s("a523"),v=s("ce7e"),h=s("132d"),b=s("a722"),g=s("8b9c"),y=s("0fd9"),k=s("2fa4"),j=s("8654"),_=Object(r["a"])(o,n,a,!1,null,null,null);t["a"]=_.exports;c()(_,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:p["a"],VContainer:m["a"],VDivider:v["a"],VIcon:h["a"],VLayout:b["a"],VParallax:g["a"],VRow:y["a"],VSpacer:k["a"],VTextField:j["a"]})}});
//# sourceMappingURL=app.0ac6248a.js.map