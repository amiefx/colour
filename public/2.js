(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Sections.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    homeSections: 'home/home_sections'
  })),
  created: function created() {
    this.getHomeSection();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getHomeSection: "home/getHomeSection"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  props: {
    product: {
      required: true,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home_Sections_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/Sections.vue */ "./resources/js/components/home/Sections.vue");
/* harmony import */ var _components_products_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/products/Product */ "./resources/js/components/products/Product.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Sections: _components_home_Sections_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Product: _components_products_Product__WEBPACK_IMPORTED_MODULE_1__["default"],
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      products: [],
      isLoading: false,
      fullPage: false,
      opacity: 0.99,
      isActive: false,
      pagination: {},
      page: 1
    };
  },
  //   computed: {
  //     ...mapGetters({
  //       products: 'home/home_products'
  //     }),
  //   },
  created: function created() {
    //  this.getHomeProducts()
    this.loadingStart();
  },
  mounted: function mounted() {
    this.loadingEnd();
    this.fetchProduct();
  },
  methods: {
    // ...mapActions({
    //     getHomeProducts: 'home/getHomeProducts'
    // }),
    loadingStart: function loadingStart() {
      this.isLoading = true;
    },
    loadingEnd: function loadingEnd() {
      var _this = this;

      setTimeout(function () {
        _this.isLoading = false;
      }, 1000);
    },
    fetchProduct: function fetchProduct(pagei) {
      var _this2 = this;

      pagei = pagei || '/api/products/get-home-products';
      axios.get(pagei).then(function (res) {
        var _this2$products;

        //  this.isLoading = false;
        //   this.products = res.data.data;
        (_this2$products = _this2.products).push.apply(_this2$products, _toConsumableArray(res.data.data));

        _this2.pagination = {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".VueCarousel-navigation-prev[data-v-63cd6604] {\n  left: 10% !important;\n}\n.VueCarousel-navigation-next[data-v-63cd6604] {\n  right: 10% !important;\n}\n.chev-next[data-v-63cd6604] {\n  height: 40px;\n  width: 40px;\n}\n.chev-prev[data-v-63cd6604] {\n  height: 40px;\n  width: 40px;\n}\n.prod[data-v-63cd6604] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.welcome[data-v-63cd6604] {\n  position: relative;\n  opacity: 0.7;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.welcome[data-v-63cd6604] {\n  min-height: 100vh;\n  background-image: url(https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg);\n  display: grid;\n  grid-template-rows: 90vh -webkit-max-content;\n  grid-template-rows: 90vh max-content;\n  gap: 20px;\n  justify-items: center;\n  align-items: center;\n  text-align: center;\n}\n.box--1[data-v-63cd6604] {\n  min-height: 50vh;\n  min-width: 50vw;\n  margin: 0 15px;\n  grid-row: 1/2;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n  border-radius: 25px;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n.box--1 h1[data-v-63cd6604] {\n  color: white;\n  font-size: 3rem;\n}\n.box--1 .color[data-v-63cd6604] {\n  align-self: start;\n  font-style: italic;\n  font-size: 26px;\n}\n.box--1 .color ._green[data-v-63cd6604] {\n  color: green;\n}\n.box--1 .color ._yellow[data-v-63cd6604] {\n  color: yellow;\n}\n.box--1 .color ._red[data-v-63cd6604] {\n  color: red;\n}\n.box--2[data-v-63cd6604] {\n  min-height: 80vh;\n  grid-row: 2/3;\n  padding: 15px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n  justify-content: space-around;\n  align-content: space-around;\n}\n.box--2 .intro[data-v-63cd6604], .box--2 .contact[data-v-63cd6604] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n  border-radius: 25px;\n  color: white;\n  margin: 15px;\n}\n.blue[data-v-63cd6604] {\n  height: 5px;\n  width: 100vw;\n  background-color: blue;\n  margin: 15px 0px;\n}\n.green[data-v-63cd6604] {\n  height: 5px;\n  width: 100vw;\n  background-color: green;\n  margin: 15px 0px;\n}\n.yellow[data-v-63cd6604] {\n  height: 5px;\n  width: 100vw;\n  background-color: yellow;\n  margin: 15px 0px;\n}\n.red[data-v-63cd6604] {\n  height: 5px;\n  width: 100vw;\n  background-color: red;\n  margin: 15px 0px;\n}\n.services[data-v-63cd6604] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n  grid-gap: 30px;\n  justify-items: center;\n  align-items: start;\n  padding: 30px;\n  min-height: 100vh;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg);\n  position: relative;\n  opacity: 0.7;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  text-align: center;\n  color: white;\n}\n.service--1[data-v-63cd6604], .service--2[data-v-63cd6604], .service--3[data-v-63cd6604] {\n  display: grid;\n  grid-template-rows: 100px -webkit-max-content 1fr;\n  grid-template-rows: 100px max-content 1fr;\n  grid-gap: 15px;\n  margin-top: 50px;\n}\n.list[data-v-63cd6604] {\n  text-align: start;\n}\nsvg[data-v-63cd6604] {\n  height: 80px;\n  fill: white;\n  justify-self: center;\n  align-self: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-1881b37a] {\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  opacity: 0.9;\n  position: absolute;\n  width: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-aed20922] {\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "hidden-xs-only py-10" },
      [
        _c(
          "v-row",
          { attrs: { "no-gutters": "" } },
          _vm._l(_vm.homeSections, function(item, i) {
            return _c(
              "v-col",
              {
                key: i,
                staticClass: "my-3 mx-auto",
                attrs: { cols: "12", sm: "4", md: "4", lg: "4", xl: "4" }
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
                                staticClass: "mx-3",
                                attrs: {
                                  color: "grey lighten-4",
                                  to: "/collection/" + item.slug
                                }
                              },
                              [
                                _c(
                                  "v-img",
                                  {
                                    attrs: {
                                      "aspect-ratio": 0.75,
                                      src: item.image
                                    }
                                  },
                                  [
                                    _c("v-expand-transition", [
                                      hover
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text",
                                              staticStyle: { height: "18%" }
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "h3",
                                                        {
                                                          staticClass:
                                                            "title text-uppercase primary--text text-center mt-5"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(item.name)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "h3",
                                                        {
                                                          staticClass:
                                                            "subtitle-1 font-weight-light primary--text text-center mb-8",
                                                          staticStyle: {
                                                            "text-decoration":
                                                              "underline"
                                                          }
                                                        },
                                                        [_vm._v("Shop Now")]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
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
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "hidden-sm-and-up py-10" },
      [
        _c(
          "v-row",
          { attrs: { "no-gutters": "" } },
          _vm._l(_vm.homeSections, function(item, i) {
            return _c(
              "v-col",
              {
                key: i,
                staticClass: "my-3 mx-auto",
                attrs: { cols: "12", sm: "4", md: "4", lg: "4", xl: "4" }
              },
              [
                _c("v-hover", {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          return [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto",
                                attrs: {
                                  color: "grey lighten-4",
                                  "max-width": "600",
                                  to: "/collection/" + item.slug
                                }
                              },
                              [
                                _c(
                                  "v-img",
                                  {
                                    attrs: {
                                      "aspect-ratio": 0.75,
                                      src: item.image
                                    }
                                  },
                                  [
                                    _c("v-expand-transition", [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text",
                                          staticStyle: { height: "18%" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "title text-uppercase primary--text text-center mt-5"
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "subtitle-1 font-weight-light primary--text text-center mb-8",
                                                      staticStyle: {
                                                        "text-decoration":
                                                          "underline"
                                                      }
                                                    },
                                                    [_vm._v("Shop Now")]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
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
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "mx-2 mb-2",
                attrs: {
                  to: "/products/" + _vm.product.slug,
                  color: "grey lighten-4"
                }
              },
              [
                _c(
                  "v-img",
                  {
                    staticClass: "grey lighten-2",
                    attrs: { "aspect-ratio": 0.66, src: _vm.product.image1 },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "placeholder",
                          fn: function() {
                            return [
                              _c(
                                "v-row",
                                {
                                  staticClass: "fill-height ma-0",
                                  attrs: { align: "center", justify: "center" }
                                },
                                [
                                  _c("v-progress-circular", {
                                    attrs: {
                                      indeterminate: "",
                                      color: "grey lighten-5"
                                    }
                                  })
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
                            src: _vm.product.image2
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-expand-transition", [
                      hover
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "d-flex transition-fast-in-fast-out v-card--reveal",
                              staticStyle: { height: "20%" }
                            },
                            [
                              _c("v-btn", { staticClass: "primary" }, [
                                _vm._v("Shop Now")
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-text",
                  {
                    staticClass: "pt-6",
                    staticStyle: { position: "relative" }
                  },
                  [
                    _vm.product.new
                      ? _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: {
                              absolute: "",
                              color: "orange",
                              fab: "",
                              right: "",
                              top: ""
                            }
                          },
                          [_vm._v("\n          New\n      ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "font-weight-light title mb-0 text-center"
                      },
                      [_vm._v(_vm._s(_vm.product.name))]
                    ),
                    _vm._v(" "),
                    _c("h3", { staticClass: "text-center" }, [
                      _vm.product.offer > 0
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "subtitle-1 font-weight-medium orange--text mb-0 text-center",
                              staticStyle: { "text-decoration": "line-through" }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.product.formatted_price) +
                                  "\n          "
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
                            "\n              " +
                              _vm._s(_vm.product.formatted_offer) +
                              "\n          "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        staticClass: "mx-0 text-center d-flex justify-center",
                        attrs: { align: "center" }
                      },
                      [
                        _c("v-rating", {
                          attrs: {
                            value: parseFloat(_vm.product.rating),
                            color: "amber",
                            dense: "",
                            "half-increments": "",
                            readonly: "",
                            size: "14"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "grey--text ml-4" }, [
                          _vm._v(
                            _vm._s(_vm.product.rating) +
                              " (" +
                              _vm._s(_vm.product.total_reviews) +
                              ")"
                          )
                        ])
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
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "welcome" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "box--2" }, [
        _c(
          "div",
          { staticClass: "intro pa-5" },
          [
            _vm._v(
              "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro maxime iusto tempore molestiae iure sit doloribus facilis illum? Aliquam provident expedita quos tempora assumenda iste deserunt placeat unde quo.\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, dolor. Recusandae tempore eum, et repudiandae nemo magnam accusamus nihil temporibus sed in aut saepe. Deleniti at fuga eveniet voluptatum magni?\n            Praesentium tenetur fuga assumenda laboriosam adipisci doloribus? Nostrum ab cumque a nam consequatur. Cum, voluptate accusamus natus magnam similique soluta quaerat molestiae exercitationem, pariatur fugiat cumque, aspernatur at consequatur sequi!\n            Porro fugiat alias voluptatum quia commodi veritatis deserunt eius obcaecati! Beatae corrupti, quaerat amet facilis iste aut mollitia reprehenderit reiciendis quis consectetur recusandae inventore necessitatibus. Vero soluta vitae nihil voluptas?\n             "
            ),
            _c(
              "v-btn",
              { attrs: { rounded: "", color: "primary", dark: "" } },
              [_vm._v("\n               Rounded Button\n              ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "contact pa-5" },
          [
            _c("h3", [_vm._v("We want to hear from you")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n              Send us your details and we’ll get back to you to schedule a time to talk.\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "v-form",
              { staticClass: "text-white" },
              [
                _c("v-text-field", {
                  attrs: { label: "Name", "hide-details": "auto" }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Emal", "hide-details": "auto" }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mb-5",
                  attrs: { label: "Phone", "hide-details": "auto" }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { rounded: "", color: "primary", dark: "" } },
                  [_vm._v("\n               Rounded Button\n              ")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "services" }, [
      _c("div", { staticClass: "service--1" }, [
        _c(
          "svg",
          {
            staticClass: "svg u_1209830789",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 100 100",
              id: "1209830789",
              "data-icon-name": "li_paint_roller"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M86.2,43.4L56.6,13.8c-2.4-2.4-6.7-2.4-9.1,0L36.4,24.9c-2.5,2.5-2.5,6.6,0,9.1L66,63.6c1.2,1.2,2.8,1.9,4.6,1.9\n\tc1.7,0,3.3-0.7,4.6-1.9l4.6-4.6c3.8,4.6,3.5,11.5-0.8,15.8c-4.6,4.6-12.1,4.6-16.7,0l-9.2-9.2c-2.7-2.7-6.3-4.2-10.1-4.2\n\tc-3.4,0-6.6,1.2-9.2,3.4l-4.7-4.7L14.2,74.8c-3,3-3,7.9,0,11c1.5,1.5,3.4,2.3,5.5,2.3c2.1,0,4-0.8,5.5-2.3L39.9,71l-4.5-4.5\n\tc2.1-1.7,4.7-2.7,7.4-2.7c3.2,0,6.1,1.2,8.4,3.5l9.2,9.2c2.8,2.8,6.4,4.2,10.1,4.2c3.7,0,7.3-1.4,10.1-4.2\n\tc5.3-5.3,5.5-13.7,0.8-19.3l4.8-4.8C88.7,50,88.7,45.9,86.2,43.4z M23.4,84c-2,2-5.5,2-7.5,0c-2.1-2.1-2.1-5.4,0-7.5l13-13l7.5,7.5\n\tL23.4,84z M84.4,50.8L73.4,61.8c-1.5,1.5-4.2,1.5-5.7,0L38.1,32.3c-1.6-1.6-1.6-4.1,0-5.7l11.1-11.1c0.7-0.7,1.8-1.2,2.8-1.2\n\tc1.1,0,2.1,0.4,2.8,1.2l29.6,29.6C86,46.7,86,49.2,84.4,50.8z",
                id: "1321686744"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Our Services")]),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service--2" }, [
        _c(
          "svg",
          {
            staticClass: "svg u_1822776629",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 70 70",
              id: "1822776629",
              "data-icon-name": "wp-question_mark_thin"
            }
          },
          [
            _c("g", { attrs: { id: "1149379259" } }, [
              _c("circle", {
                attrs: { cx: "35", cy: "47", r: "2", id: "1373409117" }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M35,42c-0.6,0-1-0.4-1-1c0-3.2,2.2-4.8,4.2-6.3c2-1.5,3.8-2.8,3.8-5.5c0-3.6-2.9-6.2-7-6.2c-4.1,0-7,2.9-7,7\n\t\tc0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1c0-5.2,3.8-9,9-9c5.2,0,9,3.4,9,8.2c0,3.7-2.4,5.5-4.6,7.1C37.6,37.7,36,38.8,36,41\n\t\tC36,41.6,35.6,42,35,42z",
                  id: "1158749410"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d:
                    "M35,60c-13.8,0-25-11.2-25-25s11.2-25,25-25c13.8,0,25,11.2,25,25S48.8,60,35,60z M35,12c-12.7,0-23,10.3-23,23\n\t\ts10.3,23,23,23c12.7,0,23-10.3,23-23S47.7,12,35,12z",
                  id: "1940391037"
                }
              })
            ])
          ]
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Why Choose Us?")]),
        _vm._v(" "),
        _vm._m(3)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service--3" }, [
        _c(
          "svg",
          {
            staticClass: "svg u_1391966636",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 100 100",
              id: "1391966636",
              "data-icon-name": "li_tools"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M84.9,63.5c-2.3-2.3-5.3-3.6-8.6-3.6c-2.9,0-5.6,1-7.7,2.9L55.8,50l21.3-21.3l0.8,0.8l7.8-7.8l-3.1-3.1l-7.8,7.8l0.8,0.8\n\tL54.2,48.4L41.4,35.6c1.8-2.2,2.9-4.9,2.9-7.7c0-3.2-1.3-6.3-3.6-8.6c-3-3-7.5-4.2-11.7-3.1l-1.9,0.5l7.3,7.3l-6.3,6.3l-7.3-7.3\n\tl-0.5,1.9c-1.1,4.2,0.1,8.7,3.1,11.7c2.3,2.3,5.3,3.6,8.6,3.6l0,0c2.9,0,5.6-1,7.7-2.9L52.6,50L38.3,64.3l-3.9-3.9L21.9,72.9\n\tc-1.3,1.3-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7c1.3,1.3,2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9l12.5-12.5l-3.9-3.9l14.3-14.3\n\tL67,64.4c-1.8,2.2-2.9,4.9-2.9,7.7c0,3.2,1.3,6.3,3.6,8.6c2.3,2.3,5.3,3.5,8.5,3.5c1.1,0,2.1-0.1,3.2-0.4l1.9-0.5L74,76l6.2-6.3\n\tl7.3,7.3l0.5-1.9C89.1,71,87.9,66.5,84.9,63.5z M32.1,37.8L32.1,37.8c-2.7,0-5.2-1-7-2.9c-2-2-3-4.7-2.9-7.6l6,6l9.4-9.4l-6-6\n\tc2.8-0.2,5.6,0.9,7.5,2.9c1.9,1.9,2.9,4.4,2.9,7c0,2.7-1,5.2-2.9,7C37.2,36.8,34.7,37.8,32.1,37.8z M29.7,80.7\n\tc-1.7,1.7-4.6,1.7-6.2,0c-0.8-0.8-1.3-1.9-1.3-3.1c0-1.2,0.5-2.3,1.3-3.1l10.9-10.9l6.3,6.3L29.7,80.7z M80.2,66.6L70.8,76l6,6\n\tc-0.2,0-0.4,0-0.6,0c-2.6,0-5.1-1-7-2.9c-1.9-1.9-2.9-4.4-2.9-7c0-2.7,1-5.2,2.9-7c1.9-1.9,4.4-2.9,7-2.9c2.7,0,5.2,1,7,2.9\n\tc2,2,3,4.7,2.9,7.6L80.2,66.6z",
                id: "1495565370"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Home Maintenance & More")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Whether you need home maintenance or our decorating services, we provide a competitive service. Get in touch with our team for more information\n          "
          )
        ])
      ])
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box--1" }, [
      _c("h1", [
        _vm._v("Welcome to "),
        _c("br"),
        _vm._v("\n              A Touch of Colour\n          ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "color" }, [
        _c("span", { staticClass: "_green" }, [_vm._v("Colour")]),
        _vm._v(" "),
        _c("span", { staticClass: "_yellow" }, [_vm._v("Your")]),
        _vm._v(" "),
        _c("span", { staticClass: "_red" }, [_vm._v("World")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "devider--1" }, [
      _c("div", { staticClass: "blue" }),
      _vm._v(" "),
      _c("div", { staticClass: "green" }),
      _vm._v(" "),
      _c("div", { staticClass: "yellow" }),
      _vm._v(" "),
      _c("div", { staticClass: "red" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list" }, [
      _c("li", [_vm._v("Painting and Decorating")]),
      _vm._v(" "),
      _c("li", [_vm._v("Interior Design")]),
      _vm._v(" "),
      _c("li", [_vm._v("Property Maintenance")]),
      _vm._v(" "),
      _c("li", [_vm._v("Commercial and Residential")]),
      _vm._v(" "),
      _c("li", [_vm._v("Professional Cleaning")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list" }, [
      _c("li", [_vm._v("Over 30 Years of experience")]),
      _vm._v(" "),
      _c("li", [_vm._v("High Standards of Workmanship")]),
      _vm._v(" "),
      _c("li", [_vm._v("Customer care is our focus point")]),
      _vm._v(" "),
      _c("li", [_vm._v("1 year guarantee on all services")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home/Sections.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/home/Sections.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sections.vue?vue&type=template&id=1881b37a&scoped=true& */ "./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true&");
/* harmony import */ var _Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sections.vue?vue&type=script&lang=js& */ "./resources/js/components/home/Sections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& */ "./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1881b37a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/Sections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/Sections.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/home/Sections.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=style&index=0&id=1881b37a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_style_index_0_id_1881b37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sections.vue?vue&type=template&id=1881b37a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/Sections.vue?vue&type=template&id=1881b37a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sections_vue_vue_type_template_id_1881b37a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/Product.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/products/Product.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=aed20922&scoped=true& */ "./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& */ "./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "aed20922",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/products/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=style&index=0&id=aed20922&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_aed20922_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=aed20922&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Product.vue?vue&type=template&id=aed20922&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aed20922_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& */ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);