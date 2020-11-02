(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_observe_visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-observe-visibility */ "./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'mardom',
  props: {
    source: String
  },
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default.a,
    VueObserveVisibility: vue_observe_visibility__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.category,
      titleTemplate: '%s | Khodgi',
      property: 'og:title',
      meta: [{
        name: 'site_name',
        content: 'Khodgi',
        property: 'og:site_name'
      }, {
        name: 'url',
        content: this.currentUrl,
        property: 'og:url'
      }, {
        name: 'description',
        content: "Essence of classic, contemporary embroidery submerging beautifully with base color. ".concat(this.category),
        property: 'og:description'
      }, {
        name: 'type',
        content: 'website',
        property: 'og:type'
      }, {
        name: 'image',
        content: this.pageImage,
        property: 'og:image'
      }]
    };
  },
  data: function data() {
    return {
      products: [],
      user_location: [],
      cat: "",
      pagination: {},
      currentUrl: window.location.href,
      category: '',
      page: 1,
      itemSort: ["Price, low to high", "Price, high to low", "Alphabetically, A-Z", "Alphabetically, Z-A", "Date, old to new", "Date, new to old"],
      item: "Date, new to old",
      sortOptions: {
        orderBy: "",
        sortBy: ""
      },
      url: '',
      data: [],
      pageImage: '',
      isLoading: false,
      fullPage: false,
      opacity: 0.99
    };
  },
  created: function created() {
    this.loadingStart();
  },
  watch: {
    cat: function cat() {
      this.fetchProduct();
    }
  },
  methods: {
    addToCart: function addToCart(event) {
      var index = event.currentTarget.id; //  const index = this.items.indexOf(event)
      //  console.log(index);

      this.$store.dispatch("addProductToCart", {
        product: this.items[index],
        type: 'Unstitched',
        size: 'Default',
        customSize: '',
        quantity: 1
      });
    },
    fetchProduct: function fetchProduct(pagei) {
      var _this = this;

      var sortBy = this.sortOptions.sortBy.length == 0 ? 'name' : this.sortOptions.sortBy;
      var orderBy = this.sortOptions.orderBy.length == 0 ? 'asc' : this.sortOptions.orderBy;
      pagei = pagei || "/api/products/categories/".concat(this.routeID);
      axios.get(pagei, {
        params: {
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        var _this$products;

        _this.isLoading = false; //   this.products = res.data.data;

        (_this$products = _this.products).push.apply(_this$products, _toConsumableArray(res.data.data));

        _this.category = res.data.data[0].category;
        _this.pageImage = res.data.data[0].image1;
        _this.pagination = {
          path: res.data.meta.path + "?page=",
          prev_page_url: res.data.links.prev,
          next_page_url: res.data.links.next,
          current_page: res.data.meta.current_page,
          first_page_url: res.data.links.first,
          last_page_url: res.data.links.last
        };
      })["catch"](function (err) {
        console.log();
      });
    },
    fetchPaginatedProduct: function fetchPaginatedProduct(url) {
      this.url = url;
      this.fetchProduct();
    },
    loadingStart: function loadingStart() {
      this.isLoading = true;
    },
    loadingEnd: function loadingEnd() {
      this.isLoading = false;
    },
    handleScrollingToBottom: function handleScrollingToBottom(isVisible) {
      if (!isVisible) {
        return;
      }

      if (!this.pagination.next_page_url) {
        return;
      }

      this.fetchProduct(this.pagination.next_page_url);
    }
  },
  computed: {
    routeID: function routeID() {
      return this.cat = this.$route.params.slug;
    },
    urls: function urls() {
      return this.url = "/api/products/categories/".concat(this.routeID);
    },
    sortings: function sortings() {
      if (this.item == "Price, low to high") {
        this.sortOptions.sortBy = "price_pkr";
        this.sortOptions.orderBy = "asc";
      }

      if (this.item == "Price, high to low") {
        this.sortOptions.sortBy = "price_pkr";
        this.sortOptions.orderBy = "desc";
      }

      if (this.item == "Alphabetically, A-Z") {
        this.sortOptions.sortBy = "name";
        this.sortOptions.orderBy = "asc";
      }

      if (this.item == "Alphabetically, Z-A") {
        this.sortOptions.sortBy = "name";
        this.sortOptions.orderBy = "desc";
      }

      if (this.item == "Date, old to new") {
        this.sortOptions.sortBy = "created_at";
        this.sortOptions.orderBy = "asc";
      }

      if (this.item == "Date, new to old") {
        this.sortOptions.sortBy = "created_at";
        this.sortOptions.orderBy = "desc";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal {\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n}\n.img__wrapper{\n  position:relative;\n  overflow:hidden;\n}\n.img__wrapper img{\n  width: 100%;\n}\n.sold_out {\n    top: 2em;\n    left: -4em;\n    color: #fff;\n    display: block;\n    position:absolute;\n    text-align: center;\n    text-decoration: none;\n    letter-spacing: .06em;\n    background-color: #A00;\n    padding: 0.5em 5em 0.4em 5em;\n    text-shadow: 0 0 0.75em #444;\n    box-shadow: 0 0 0.5em rgba(0,0,0,0.5);\n    font: bold 16px/1.2em Arial, Sans-Serif;\n    -webkit-text-shadow: 0 0 0.75em #444;\n    -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,0.5);\n    -webkit-transform: rotate(-45deg) scale(0.75,1);\n    z-index:1;\n}\n.sold_out:before {\n    content: '';\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    margin: -0.3em -5em;\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7);\n    border: 2px rgba(255,255,255,0.7) dashed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        [
          _c(
            "v-col",
            {
              staticClass: "px-6",
              attrs: { cols: "12", sm: "3", md: "3", lg: "3", xl: "3" }
            },
            [
              _c("v-row", { staticClass: "d-flex justify-center mt-5" }, [
                _c("h1", [_vm._v(_vm._s(_vm.category))])
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-flex justify-center mb-2" },
                [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
                1
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.itemSort,
                  dense: "",
                  outlined: "",
                  label: "Filter By"
                },
                model: {
                  value: _vm.item,
                  callback: function($$v) {
                    _vm.item = $$v
                  },
                  expression: "item"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-n2",
                  attrs: { color: "primary", block: "", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.fetchProduct()
                    }
                  }
                },
                [_vm._v("Ok")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "px-6",
              attrs: { cols: "12", sm: "9", md: "9", lg: "9", xl: "9" }
            },
            [
              _c(
                "v-row",
                { staticClass: "wrap" },
                _vm._l(_vm.products, function(i, index) {
                  return _c(
                    "v-col",
                    {
                      key: index,
                      staticClass: "px-3",
                      attrs: { cols: "6", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "mb-2 img__wrapper",
                                      attrs: { color: "grey lighten-4" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: { to: "/products/" + i.slug }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              staticClass: "grey lighten-2",
                                              attrs: {
                                                src: i.image1,
                                                "aspect-ratio": 0.66
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "placeholder",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            staticClass:
                                                              "fill-height ma-0",
                                                            attrs: {
                                                              align: "center",
                                                              justify: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color:
                                                                    "grey lighten-5"
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            },
                                            [
                                              _vm._v(" "),
                                              hover
                                                ? _c("v-img", {
                                                    attrs: {
                                                      "aspect-ratio": 0.66,
                                                      src: i.image2
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      !i.in_stock
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "sold_out white--text",
                                              attrs: { href: "" }
                                            },
                                            [_vm._v("Sold out")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        {
                                          staticClass: "pt-6",
                                          staticStyle: { position: "relative" }
                                        },
                                        [
                                          i.new
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    absolute: "",
                                                    color: "orange",
                                                    id: index,
                                                    fab: "",
                                                    right: "",
                                                    top: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      New\n                "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-light title mb-0 text-center hidden-xs-only"
                                            },
                                            [_vm._v(_vm._s(i.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-light hidden-sm-and-up mb-0 text-center"
                                            },
                                            [_vm._v(_vm._s(i.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h3",
                                            { staticClass: "text-center" },
                                            [
                                              i.offer > 0
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-1 font-weight-medium orange--text mb-0 text-center",
                                                      staticStyle: {
                                                        "text-decoration":
                                                          "line-through"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                  " +
                                                          _vm._s(
                                                            i.formatted_price
                                                          ) +
                                                          "\n                "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "title font-weight-black orange--text mb-0 text-center"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        i.formatted_offer
                                                      ) +
                                                      "\n                "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            {
                                              staticClass:
                                                "mx-0 text-center d-flex justify-center",
                                              attrs: { align: "center" }
                                            },
                                            [
                                              _c("v-rating", {
                                                attrs: {
                                                  value: parseFloat(i.rating),
                                                  color: "amber",
                                                  dense: "",
                                                  "half-increments": "",
                                                  readonly: "",
                                                  size: "14"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "grey--text ml-4"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(i.rating) +
                                                      " (" +
                                                      _vm._s(i.total_reviews) +
                                                      ")"
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
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _vm.products.length
                ? _c("div", {
                    directives: [
                      {
                        name: "observe-visibility",
                        rawName: "v-observe-visibility",
                        value: _vm.handleScrollingToBottom,
                        expression: "handleScrollingToBottom"
                      }
                    ]
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { attrs: { hidden: "" } }, [
        _vm._v(_vm._s(_vm.routeID) + " " + _vm._s(_vm.sortings))
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vld-parent" },
        [
          _c("loading", {
            attrs: {
              active: _vm.isLoading,
              loader: "dots",
              opacity: _vm.opacity,
              color: "#6200E"
            },
            on: {
              "update:active": function($event) {
                _vm.isLoading = $event
              }
            }
          })
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

/***/ "./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js ***!
  \********************************************************************************/
/*! exports provided: default, ObserveVisibility, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveVisibility", function() { return ObserveVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}
function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}
function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof(val1) === 'object') {
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState =
/*#__PURE__*/
function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options, vnode) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      vnode.context.$nextTick(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function bind(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function update(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unbind(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    bind(el, {
      value: value
    }, vnode);
  }
}

function unbind(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

var ObserveVisibility = {
  bind: bind,
  update: update,
  unbind: unbind
};

function install(Vue) {
  Vue.directive('observe-visibility', ObserveVisibility);
  /* -- Add more components here -- */
}
/* -- Plugin definition & Auto-install -- */

/* You shouldn't have to modify the code below */
// Plugin

var plugin = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install: install
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=template&id=eee7b944& */ "./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&");
/* harmony import */ var _ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=script&lang=js& */ "./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductCollection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=template&id=eee7b944& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);