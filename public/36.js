(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Social.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Social.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Size social',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      headers: [{
        text: "#",
        align: "start",
        sortable: false,
        value: "id"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Icon",
        value: "icon"
      }, {
        text: "Link",
        value: "link"
      }, {
        text: "Color",
        value: "color"
      }, {
        text: "Actions",
        value: "action",
        sortable: false
      }],
      social: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        icon: "",
        link: "",
        color: ""
      },
      defaultItem: {
        id: "",
        name: "",
        icon: "",
        link: "",
        color: ""
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Link" : "Edit Link";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
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
      axios.get("/api/admin/social").then(function (res) {
        _this.social = res.data.social;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.social.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this2 = this;

      var index = this.social.indexOf(item);
      var decide = confirm("Are you sure you want to delete this item?");

      if (decide) {
        axios["delete"]("/api/admin/social/" + item.id).then(function (res) {
          _this2.snackbar = true;

          _this2.social.splice(index, 1);
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this4 = this;

      if (this.editedIndex > -1) {
        axios.put("/api/admin/social/" + this.editedItem.id, this.editedItem); //   .then(res => Object.assign(this.roles[this.editedIndex], res.data.data.attribute_set))
        //  .catch(err => console.log(err.response))

        Object.assign(this.social[this.editedIndex], this.editedItem);
      } else {
        axios.post("/api/admin/social", this.editedItem).then(function (res) {
          return _this4.social.push(res.data.social);
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.social, "sort-by": "id" },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v("Social Media links")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "500px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "mb-2",
                                      attrs: { color: "primary", dark: "" }
                                    },
                                    on
                                  ),
                                  [_vm._v("New Link")]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.formTitle))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c(
                                  "v-container",
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "12"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "Name" },
                                              model: {
                                                value: _vm.editedItem.name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "name",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "Icon" },
                                              model: {
                                                value: _vm.editedItem.icon,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "icon",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.icon"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "Link" },
                                              model: {
                                                value: _vm.editedItem.link,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "link",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.link"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "color" },
                                              model: {
                                                value: _vm.editedItem.color,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "color",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.color"
                                              }
                                            })
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
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: { click: _vm.close }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: { click: _vm.save }
                                  },
                                  [_vm._v("Save")]
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
              ]
            },
            proxy: true
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("mdi-pencil")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("mdi-delete")]
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
                  [_vm._v("Reset")]
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n    Record deleted successfully.\n    "),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("Close")]
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

/***/ "./resources/js/views/admin/Social.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/Social.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Social.vue?vue&type=template&id=7ac9104c& */ "./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c&");
/* harmony import */ var _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Social.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/Social.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=template&id=7ac9104c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Social.vue?vue&type=template&id=7ac9104c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_7ac9104c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);