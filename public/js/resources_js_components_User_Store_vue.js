"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Store_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Store",
  data: function data() {
    return {
      name: null,
      email: null,
      phone: null,
      photo: null,
      position_id: null,
      selectedFile: null,
      positions: null
    };
  },
  mounted: function mounted() {
    this.getPositions();
  },
  methods: {
    getPositions: function getPositions() {
      var _this = this;

      axios.get('/api/v1/positions').then(function (res) {
        _this.positions = res.data.data.positions;
        console.log(_this.positions);
      });
    },
    onFileSelected: function onFileSelected(event) {
      console.log(event.target.files[0]);
      this.selectedFile = event.target.files[0];
    },
    storeUser: function storeUser() {
      var _this2 = this;

      var fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name);
      fd.append('name', this.name);
      fd.append('email', this.email);
      fd.append('phone', this.phone);
      fd.append('position_id', this.position_id);
      axios.post('/api/v1/users', fd).then(function (res) {
        _this2.$router.push({
          name: 'user.index'
        });
      });
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.name && this.email && this.phone && this.position_id && this.selectedFile;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Store.vue":
/*!************************************************!*\
  !*** ./resources/js/components/User/Store.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.vue?vue&type=template&id=10dfc8b0&scoped=true& */ "./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true&");
/* harmony import */ var _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Store.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "10dfc8b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Store.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Store.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/User/Store.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Store.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Store_vue_vue_type_template_id_10dfc8b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Store.vue?vue&type=template&id=10dfc8b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Store.vue?vue&type=template&id=10dfc8b0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-50 mt-4" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name",
        },
      ],
      staticClass: "form-control mt-2",
      attrs: { type: "text", placeholder: "name" },
      domProps: { value: _vm.name },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.email,
          expression: "email",
        },
      ],
      staticClass: "form-control mt-2",
      attrs: { type: "text", placeholder: "email" },
      domProps: { value: _vm.email },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.email = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.phone,
          expression: "phone",
        },
      ],
      staticClass: "form-control mt-2",
      attrs: { type: "text", placeholder: "phone" },
      domProps: { value: _vm.phone },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.phone = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      staticClass: "form-control mt-2",
      attrs: { type: "file" },
      on: { change: _vm.onFileSelected },
    }),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.position_id,
            expression: "position_id",
          },
        ],
        staticClass: "form-select mt-2",
        attrs: { "aria-label": "Default select example" },
        on: {
          change: function ($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function (o) {
                return o.selected
              })
              .map(function (o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.position_id = $event.target.multiple
              ? $$selectedVal
              : $$selectedVal[0]
          },
        },
      },
      [
        _vm._l(_vm.positions, function (position) {
          return [
            _c("option", { domProps: { value: position.id } }, [
              _vm._v(_vm._s(position.position)),
            ]),
          ]
        }),
      ],
      2
    ),
    _vm._v(" "),
    _c("input", {
      staticClass: "btn btn-primary mt-3",
      attrs: { disabled: !_vm.isDisabled, type: "text", value: "Submit" },
      on: {
        click: function ($event) {
          $event.preventDefault()
          return _vm.storeUser.apply(null, arguments)
        },
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);