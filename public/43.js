(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{141:function(t,i,s){"use strict";s.r(i);var e={layout:"mardom",metaInfo:{title:"Privacy Policy",titleTemplate:"%s | Khodgi"},data:function(){return{text:""}},created:function(){var t=this;axios.get("/api/privacy").then((function(i){t.text=i.data.privacy}))}},a=s(0),n=Object(a.a)(e,(function(){var t=this.$createElement,i=this._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"pb-10 pt-3"},[i("v-row",{staticClass:"d-flex justify-center mt-5"},[i("h1",[this._v("PRIVACY POLICY")])]),this._v(" "),i("v-row",{staticClass:"d-flex justify-center mb-2"},[i("v-icon",[this._v("mdi-dots-horizontal")])],1)],1),this._v(" "),i("div",{staticClass:" mx-12",domProps:{innerHTML:this._s(this.text.text)}})])}),[],!1,null,null,null);i.default=n.exports}}]);