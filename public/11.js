(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{23:function(t,e,r){var n=r(61);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(3)(n,i);n.locals&&(t.exports=n.locals)},236:function(t,e,r){"use strict";r.r(e);var n={layout:"mardom",components:{},metaInfo:{title:"Feedback",titleTemplate:"%s | A Touch of Colour"},data:function(){return{form:{name:"",email:"",rating:null,title:"",body:""},text:"",msg:!1,valid:!0,loading:!1,rules:{required:function(t){return!!t||"This Field is Required"},min:function(t){return t.length>=5||"Minimum 5 Chracters Required"},validEmail:function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}}}},methods:{submit:function(){var t=this;axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.post("/api/ratings",this.form).then((function(e){t.$router.replace({name:"home"})})).catch((function(e){t.text=e.response.data.errors[0],t.snackbar=!0}))}}},i=(r(60),r(0)),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"pb-10 pt-3"},[r("v-row",{staticClass:"d-flex justify-center mt-5"},[r("h1",[t._v("LEAVE US FEEDBACK")])]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center"},[r("v-icon",[t._v("mdi-dots-horizontal")])],1)],1),t._v(" "),r("div",{staticClass:"mx-12"},[r("v-row",[r("v-col",{staticClass:"px-6 text-center text1",attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[r("h2",[t._v("\n              We appreciate our customers taking the time to share their experiences and look forward to working with you.\n          ")])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6",xl:"6"}},[r("v-col",{attrs:{cols:"12"}},[r("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{staticClass:"mt-2",attrs:{label:"Name",outlined:"",dense:"",rules:[t.rules.required,t.rules.min]},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{staticClass:"mt-n3",attrs:{label:"Email",outlined:"",dense:"",rules:[t.rules.required,t.rules.validEmail]},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-rating",{staticClass:"mt-n3",attrs:{"background-color":"grey",color:"black accent-4",dense:"",hover:"","aria-label":"Rating",rules:[t.rules.required]},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}}),t._v(" "),r("v-text-field",{staticClass:"mt-2",attrs:{label:"Review Title",outlined:"",dense:"",rules:[t.rules.required]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),r("v-textarea",{staticClass:"mt-n3",attrs:{label:"Review Body",outlined:"",dense:"",rules:[t.rules.required]},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),r("v-btn",{staticClass:"float-right mt-n3",attrs:{type:"submit",disabled:!t.valid,loading:t.loading,dark:""},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Submit")]),t._v(" "),r("v-divider",{staticClass:"mt-10"})],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=a.exports},60:function(t,e,r){"use strict";var n=r(23);r.n(n).a},61:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"\na {\r\n  text-decoration: none;\r\n  font-weight: 800;\n}\n.text1 {\r\n    align-items: center;\n}\r\n",""])}}]);