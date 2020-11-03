(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{249:function(e,t,r){"use strict";r.r(t);var n={layout:"mardom",middleware:["guest"],components:{"vue-recaptcha":r(28).a},metaInfo:{title:"Register",titleTemplate:"%s | Khodgi"},data:function(){return{form:{name:"",email:"",password:"",password_confirmation:"",robot:!1},valid:!0,loading:!1,snackbar:!1,text:"",showPassword:!1,showPassword2:!1,rules:{required:function(e){return!!e||"This Field is Required"},min:function(e){return e.length>=3||"Minimum 5 Chracters Required"},minpass:function(e){return e.length>=8||"Minimum 8 Chracters Required"},validEmail:function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}}}},computed:{passwordMatch:function(){return this.form.password==this.form.password_confirmation||"Password does Not Match"}},methods:{submit:function(){var e=this;this.form.robot&&(axios.interceptors.request.use((function(t){return e.loading=!0,t}),(function(t){return e.loading=!1,Promise.reject(t)})),axios.interceptors.response.use((function(t){return e.loading=!1,t}),(function(t){return e.loading=!1,Promise.reject(t)})),axios.post("/api/register",this.form).then((function(t){e.text="Resistered Successfully!",e.snackbar=!0,e.$router.push("/signin")})).catch((function(t){e.text=t.response.data.errors.email[0],e.snackbar=!0})))},onVerify:function(e){e&&(this.form.robot=!0)}}},i=r(0),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[r("v-card",{staticClass:"elevation-12 pb-5"},[r("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",top:"",color:"primary"}}),e._v(" "),r("v-toolbar",{attrs:{color:"",flat:""}},[r("v-toolbar-title",[e._v("Register form")])],1),e._v(" "),r("v-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-card-text",[r("v-text-field",{attrs:{"prepend-icon":"mdi-account",label:"User Name",rules:[e.rules.required,e.rules.min]},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Email",rules:[e.rules.required,e.rules.validEmail]},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{label:"Password",rules:[e.rules.required,e.rules.minpass],"prepend-icon":"mdi-lock",type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{label:"ReType Password",rules:[e.rules.required,e.passwordMatch],"prepend-icon":"mdi-lock",type:e.showPassword2?"text":"password","append-icon":e.showPassword2?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword2=!e.showPassword2}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),e._v(" "),r("vue-recaptcha",{ref:"recaptcha",attrs:{sitekey:"6Lc0fNsZAAAAAJoq33n9PPWeN7nWgNeJDBVaNNZ1"},on:{verify:e.onVerify}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),e.loading?e._e():r("v-btn",{attrs:{color:"primary",block:"",disabled:!e.valid,type:"submit"}},[e._v("Register")])],1)],1),e._v(" "),r("v-card-text",{staticClass:"text-center pb-0"},[e._v("\n        Already have and account?\n        "),r("router-link",{attrs:{to:{name:"signin"}}},[e._v("\n          login\n        ")])],1)],1),e._v(" "),r("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n      "),r("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports},28:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=Object.prototype.hasOwnProperty;var o,a,s,c=(o=!1,a=[],s={resolved:function(){return o},resolve:function(e){if(!o){o=!0;for(var t=0,r=a.length;t<r;t++)a[t](e)}},promise:{then:function(e){o?e():a.push(e)}}},{notify:function(){s.resolve()},wait:function(){return s.promise},render:function(e,t,r){this.wait().then((function(){r(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){i.call(window,"grecaptcha")&&i.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!s.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=c.notify);var d={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var e=document.createElement("script");e.id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,e.async=!0,e.defer=!0,document.head.appendChild(e)}},mounted:function(){var e=this;c.checkRecaptchaLoad();var t=n({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),r=this.$slots.default?this.$el.children[0]:this.$el;c.render(r,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){c.reset(this.$widgetId)},execute:function(){c.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}};t.a=d}}]);