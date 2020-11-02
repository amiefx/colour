(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Interior.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_global_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/Gallery */ "./resources/js/components/global/Gallery.vue");
/* harmony import */ var _components_global_Testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/Testimonial */ "./resources/js/components/global/Testimonial.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Import component
 // Import stylesheet




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    Gallery: _components_global_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"],
    Testimonial: _components_global_Testimonial__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Interior Design',
    titleTemplate: '%s | A TOUCH OF COLOUR'
  },
  data: function data() {
    return {
      images: [{
        src: window.location.origin + '/storage/images/interior painting (1).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (2).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (3).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (4).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (5).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (6).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (7).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (8).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (9).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (10).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (11).jpg',
        description: ''
      }, {
        src: window.location.origin + '/storage/images/interior painting (12).jpg',
        description: ''
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax {\n  position: relative;\n  opacity: 0.7;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.hero {\n  min-height: 100vh;\n  background-image: url(\"http://localhost:8000/storage/images/home8.jpg\");\n  align-items: center;\n  text-align: center;\n  padding: 50px;\n}\n.detail2 {\n  min-height: 80vh;\n  background-image: url(\"http://localhost:8000/storage/images/home7.jpeg\");\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n  gap: 50px;\n  align-items: stretch;\n  text-align: center;\n  padding: 50px;\n}\n.bx-1 {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n  border-radius: 25px;\n  color: white;\n  padding: 15px;\n}\n.bx--light {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));\n  border-radius: 25px;\n  padding: 15px;\n}\n.large_text {\n  font-size: 3rem;\n  color: #000;\n}\n.devider {\n  height: 5px;\n  width: 100vw;\n  background-color: blue;\n  margin: 15px 0px;\n}\n.blue {\n  background-color: blue;\n}\n.green {\n  background-color: green;\n}\n.yellow {\n  background-color: yellow;\n}\n.red {\n  background-color: red;\n}\n.list {\n  text-align: start;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Interior.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=template&id=560d61cf&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Interior.vue?vue&type=template&id=560d61cf& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-row",
        { staticClass: "hero parallax" },
        [
          _c(
            "v-col",
            {
              staticClass: "b1 pa-10",
              attrs: { cols: "12", sm: "12", md: "6", lg: "6", xl: "6" }
            },
            [
              _c("h1", { staticClass: "large_text my-6" }, [
                _vm._v(
                  "\n              Interior Design in Australlia\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mb-6",
                  attrs: { dark: "", color: "primary", to: "/contact" }
                },
                [_vm._v("Contact Us")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "bx-1 ma-0",
              attrs: { cols: "12", sm: "12", md: "6", lg: "6", xl: "6" }
            },
            [
              _c("h3", { staticClass: "my-6" }, [
                _vm._v(
                  "We work alongside one of Londons finest interior designers. "
                ),
                _c("br"),
                _vm._v(
                  "\n\nWith 20 years’ experience in delivering designs that are full of clever ideas. We’ll start with a Project Consultation of your style, needs and budget. We’ll suggest innovative design solutions and arrive at a concept that’s full of personality and perfectly fits your needs. "
                ),
                _c("br"),
                _vm._v(
                  "\n\nWhether it’s a budget bathroom or a commercial refurbishment, our designers are bubbling with ideas. We make sure our home owners, property developers and commercial clients get straight-talking practical advice and clever interior solutions. No fluff. Just sensible stuff which balances the latest from the design world with our tried-and-tested know-how. "
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("Gallery", { attrs: { images: _vm.images } }),
      _vm._v(" "),
      _c("Testimonial")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "devider--1" }, [
      _c("div", { staticClass: "devider blue" }),
      _vm._v(" "),
      _c("div", { staticClass: "devider green" }),
      _vm._v(" "),
      _c("div", { staticClass: "devider yellow" }),
      _vm._v(" "),
      _c("div", { staticClass: "devider red" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "parallax detail2" }, [
      _c("div", { staticClass: "bx-1" }, [
        _c("h2", { staticClass: "my-6" }, [_vm._v("Space Planning")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "The backbone of good interior design is making the space work. We aim to allocate every inch of sacred space in your home so it operates efficiently and adds value, so that when you walk around you feel “this just works”."
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bx--light" }, [
        _c("h2", { staticClass: "my-6" }, [
          _vm._v("First Class Interior Design")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "From a single room revamp to entire properties, our expert team have the ideas and experience to create the perfect layout for the way you want to live. Enquire with us today and see what we can do for you."
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "my-6" }, [
          _vm._v("You can also come to us for property maintenance. ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bx-1" }, [
        _c("h2", { staticClass: "my-6" }, [
          _vm._v("Furniture and Lighting Design")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Every scheme, and every space is different so that bespoke furniture allows a balanced design to be achieved in the most effective way. Unique furniture and lighting gives our designers particularly considered high end feel."
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Interior.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Interior.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interior.vue?vue&type=template&id=560d61cf& */ "./resources/js/views/Interior.vue?vue&type=template&id=560d61cf&");
/* harmony import */ var _Interior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Interior.vue?vue&type=script&lang=js& */ "./resources/js/views/Interior.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interior.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Interior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Interior.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Interior.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Interior.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Interior.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Interior.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Interior.vue?vue&type=template&id=560d61cf&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Interior.vue?vue&type=template&id=560d61cf& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Interior.vue?vue&type=template&id=560d61cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Interior.vue?vue&type=template&id=560d61cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Interior_vue_vue_type_template_id_560d61cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);