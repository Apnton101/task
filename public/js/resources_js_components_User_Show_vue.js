"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  data: function data() {
    return {
      user: null
    };
  },
  mounted: function mounted() {
    this.getUser();
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      axios.get("/api/v1/users/".concat(this.$route.params.id)).then(function (res) {
        _this.user = res.data.user;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Show.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/User/Show.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=5391ac86&scoped=true& */ "./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5391ac86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/User/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5391ac86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=5391ac86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Show.vue?vue&type=template&id=5391ac86&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c(
        "div",
        [
          _c("table", { staticClass: "table w-50" }, [
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("id")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(_vm.user.id)),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Name")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(_vm.user.name)),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Email")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(_vm.user.email)),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Phone")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(_vm.user.phone)),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Position")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(_vm.user.position)),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Photo")]),
                _vm._v(" "),
                _c("th", [
                  _c("img", {
                    staticStyle: { height: "70px", width: "70px" },
                    attrs: { src: _vm.user.photo, alt: "" },
                  }),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "user.index" } },
            },
            [_vm._v("Back")]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);