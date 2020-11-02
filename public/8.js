(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feedback.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'mardom',
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Feedback',
    titleTemplate: '%s | A Touch of Colour'
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        rating: null,
        title: '',
        body: ''
      },
      text: '',
      msg: false,
      valid: true,
      loading: false,
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        min: function min(v) {
          return v.length >= 5 || 'Minimum 5 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this.loading = true;
        return config;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this.loading = false;
        return response;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      });
      axios.post('/api/ratings', this.form).then(function (res) {
        _this.$router.replace({
          name: 'home'
        });
      })["catch"](function (err) {
        _this.text = err.response.data.errors[0];
        _this.snackbar = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na {\r\n  text-decoration: none;\r\n  font-weight: 800;\n}\n.text1 {\r\n    align-items: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { attrs: { fluid: "" } }, [
    _c(
      "div",
      { staticClass: "pb-10 pt-3" },
      [
        _c("v-row", { staticClass: "d-flex justify-center mt-5" }, [
          _c("h1", [_vm._v("LEAVE US FEEDBACK")])
        ]),
        _vm._v(" "),
        _c(
          "v-row",
          { staticClass: "d-flex justify-center" },
          [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mx-12" },
      [
        _c(
          "v-row",
          [
            _c(
              "v-col",
              {
                staticClass: "px-6 text-center text1",
                attrs: { cols: "12", sm: "6", md: "6", lg: "6", xl: "6" }
              },
              [
                _c("h2", [
                  _vm._v(
                    "\n              We appreciate our customers taking the time to share their experiences and look forward to working with you.\n          "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12", sm: "6", md: "6", lg: "6", xl: "6" } },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c(
                      "v-form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        },
                        model: {
                          value: _vm.valid,
                          callback: function($$v) {
                            _vm.valid = $$v
                          },
                          expression: "valid"
                        }
                      },
                      [
                        _c("v-text-field", {
                          staticClass: "mt-2",
                          attrs: {
                            label: "Name",
                            outlined: "",
                            dense: "",
                            rules: [_vm.rules.required, _vm.rules.min]
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          staticClass: "mt-n3",
                          attrs: {
                            label: "Email",
                            outlined: "",
                            dense: "",
                            rules: [_vm.rules.required, _vm.rules.validEmail]
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-rating", {
                          staticClass: "mt-n3",
                          attrs: {
                            "background-color": "grey",
                            color: "black accent-4",
                            dense: "",
                            hover: "",
                            "aria-label": "Rating",
                            rules: [_vm.rules.required]
                          },
                          model: {
                            value: _vm.form.rating,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "rating", $$v)
                            },
                            expression: "form.rating"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-text-field", {
                          staticClass: "mt-2",
                          attrs: {
                            label: "Review Title",
                            outlined: "",
                            dense: "",
                            rules: [_vm.rules.required]
                          },
                          model: {
                            value: _vm.form.title,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "title", $$v)
                            },
                            expression: "form.title"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-textarea", {
                          staticClass: "mt-n3",
                          attrs: {
                            label: "Review Body",
                            outlined: "",
                            dense: "",
                            rules: [_vm.rules.required]
                          },
                          model: {
                            value: _vm.form.body,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "body", $$v)
                            },
                            expression: "form.body"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "float-right mt-n3",
                            attrs: {
                              type: "submit",
                              disabled: !_vm.valid,
                              loading: _vm.loading,
                              dark: ""
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.submit($event)
                              }
                            }
                          },
                          [_vm._v("Submit")]
                        ),
                        _vm._v(" "),
                        _c("v-divider", { staticClass: "mt-10" })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Feedback.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Feedback.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=378ab5b8& */ "./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8&");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js& */ "./resources/js/views/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feedback.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Feedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Feedback.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Feedback.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Feedback.vue?vue&type=template&id=378ab5b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feedback.vue?vue&type=template&id=378ab5b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Feedback_vue_vue_type_template_id_378ab5b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);