(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'mardom',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Contact Us',
    titleTemplate: '%s | A TOUCH OF COLOUR'
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
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
      axios.post('/api/messages', this.form).then(function (res) {
        _this.text = "Message sent successfully!";
        _this.form.name = '';
        _this.form.email = '';
        _this.form.phone = '';
        _this.form.message = '';
        _this.msg = true;
      })["catch"](function (err) {
        _this.text = err.response.data.errors[0];
        _this.snackbar = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/Contact */ "./resources/js/components/global/Contact.vue");
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
  components: {
    Contact: _components_global_Contact__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  layout: 'mardom',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "FAQ's",
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      text: ''
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/faq').then(function (res) {
      _this.text = res.data.faq;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hd[data-v-ce5c7432] {\n  background-color: #00AEEF;\n}\n.bd[data-v-ce5c7432] {\n  background-color: lightblue;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {},
    [
      _c(
        "v-form",
        {
          attrs: { method: "post" },
          on: {
            submit: function($event) {
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
            attrs: {
              label: "Name",
              outlined: "",
              dense: "",
              rules: [_vm.rules.required]
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
              rules: [_vm.rules.required]
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
          _c("v-text-field", {
            staticClass: "mt-n3",
            attrs: {
              label: "Phone",
              outlined: "",
              dense: "",
              rules: [_vm.rules.required]
            },
            model: {
              value: _vm.form.phone,
              callback: function($$v) {
                _vm.$set(_vm.form, "phone", $$v)
              },
              expression: "form.phone"
            }
          }),
          _vm._v(" "),
          _c("v-textarea", {
            staticClass: "mt-n3",
            attrs: {
              label: "Message",
              outlined: "",
              dense: "",
              rules: [_vm.rules.required]
            },
            model: {
              value: _vm.form.message,
              callback: function($$v) {
                _vm.$set(_vm.form, "message", $$v)
              },
              expression: "form.message"
            }
          }),
          _vm._v(" "),
          _vm.msg
            ? _c(
                "v-alert",
                { attrs: { dark: "", color: "primary", dense: "" } },
                [_vm._v("\n          " + _vm._s(_vm.text) + "\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                loading: _vm.loading,
                color: "primary",
                block: "",
                disabled: !_vm.valid,
                type: "submit"
              }
            },
            [_vm._v("Send")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-container",
    [
      _c(
        "div",
        { staticClass: "pb-10 pt-3" },
        [
          _c("v-row", { staticClass: "d-flex justify-center mt-5" }, [
            _c("h1", [_vm._v("FAQ's")])
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "d-flex justify-center mb-2" },
            [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", md: "7", lg: "7", xl: "7" } },
            [
              _c(
                "v-expansion-panels",
                [
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              I am looking for a painter and decorator. What Areas do you cover?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              What are the different types of services you provide?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              How long have you been in this trade?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              How much do you charge?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              Are you Insured?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              Do you clean up after job is done?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel",
                    [
                      _c("v-expansion-panel-header", {
                        staticClass: "hd",
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var open = ref.open
                              return [
                                _c(
                                  "v-row",
                                  { attrs: { "no-gutters": "" } },
                                  [
                                    _vm._v(
                                      "\n              Do you cover furniture and carpets whilst working?\n              "
                                    ),
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        { staticClass: "bd" },
                        [
                          _c(
                            "v-row",
                            {
                              staticClass: "d-flex justify-space-around",
                              attrs: { "no-gutters": "" }
                            },
                            [
                              _c(
                                "v-col",
                                { staticClass: "my-3", attrs: { cols: "12" } },
                                [
                                  _vm._v(
                                    "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis! A quaerat quis natus quo quibusdam odio, esse necessitatibus voluptatem numquam ipsa debitis, cupiditate laudantium? Maiores doloremque tenetur iusto ad.\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illo quibusdam ipsa culpa veritatis dignissimos natus excepturi provident reprehenderit aperiam quod eaque beatae ad laudantium, commodi quae eligendi quisquam magnam.Quam voluptatum asperiores modi possimus et repellendus ratione ipsam non neque eveniet, expedita corporis quod eaque minus, suscipit, assumenda accusamus doloremque animi ipsum cumque nemo error aspernatur tenetur. Quae, praesentium?\n            "
                                  )
                                ]
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
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", {
            attrs: { cols: "12", sm: "12", md: "1", lg: "1", xl: "1" }
          }),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", md: "4", lg: "4", xl: "4" } },
            [
              _c("h3", { staticClass: "text-center mb-2" }, [
                _vm._v("Talk to Us Today")
              ]),
              _vm._v(" "),
              _c("Contact")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/global/Contact.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/global/Contact.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=0f3d6e9f& */ "./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/components/global/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/global/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=0f3d6e9f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Contact.vue?vue&type=template&id=0f3d6e9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_0f3d6e9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/Faqs.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/pages/Faqs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faqs.vue?vue&type=template&id=ce5c7432&scoped=true& */ "./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true&");
/* harmony import */ var _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faqs.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& */ "./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ce5c7432",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Faqs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=style&index=0&id=ce5c7432&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_style_index_0_id_ce5c7432_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faqs.vue?vue&type=template&id=ce5c7432&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Faqs.vue?vue&type=template&id=ce5c7432&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faqs_vue_vue_type_template_id_ce5c7432_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);