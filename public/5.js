(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: {
        email: ""
      },
      errors: {}
    };
  },
  mounted: function mounted() {
    if (User.isLoggedIn()) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    forgotPassword: function forgotPassword() {
      console.log(this.formData);
      Notification.success();
      // axios
      //     .post("/api/auth/login", this.formData)
      //     .then((response) => {
      //         // console.log(response.data);
      //         User.responseAfterLogin(response);
      //         Toast.fire({
      //             icon: "success",
      //             title: "Logged in successfully",
      //         });
      //         this.$router.push("/dashboard");
      //     })
      //     .catch((error) => {
      //         if (error.response.data.errors) {
      //             // console.log(error.response.data.errors);
      //             this.errors = error.response.data.errors;
      //         } else {
      //             // console.log(error.response.data.error);
      //             this.errors = {};
      //             Toast.fire({
      //                 icon: "warning",
      //                 title: error.response.data.error,
      //             });
      //         }
      //     });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-wrapper account-wrapper"
  }, [_c("div", {
    staticClass: "account-page"
  }, [_c("div", {
    staticClass: "account-center"
  }, [_c("div", {
    staticClass: "account-box"
  }, [_c("form", {
    staticClass: "form-signin",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.forgotPassword.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Enter Your Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "email",
      autofocus: "",
      placeholder: "Email Address"
    },
    domProps: {
      value: _vm.formData.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.email ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.email[0]) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "text-center register-link"
  }, [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_vm._v("Back to Login")])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "account-logo"
  }, [_c("a", {
    attrs: {
      href: "index.html"
    }
  }, [_c("img", {
    attrs: {
      src: "assets/backend/img/logo-dark.png",
      alt: ""
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary account-btn",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                            Reset Password\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/auth/Forgot.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Forgot.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot.vue?vue&type=template&id=5aad138f& */ "./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f&");
/* harmony import */ var _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forgot.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Forgot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=template&id=5aad138f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Forgot.vue?vue&type=template&id=5aad138f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_5aad138f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);