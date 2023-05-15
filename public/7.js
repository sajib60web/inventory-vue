(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Resister.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Resister.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
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
    resister: function resister() {
      var _this = this;
      axios.post("/api/auth/register", this.formData).then(function (response) {
        _this.errors = {};
        // console.log(response.data);
        User.responseAfterLogin(response);
        Toast.fire({
          icon: "success",
          title: "Logged in successfully"
        });
        _this.$router.push("/dashboard");
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        if (error.response.data.errors) {
          // console.log(error.response.data.errors);
          _this.errors = error.response.data.errors;
        } else {
          // console.log(error.response.data.error);
          _this.errors = {};
          Toast.fire({
            icon: "warning",
            title: error.response.data.error
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
        return _vm.resister.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.name,
      expression: "formData.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Name"
    },
    domProps: {
      value: _vm.formData.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.name ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.name[0]) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Email Address")]), _vm._v(" "), _c("input", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.email[0]) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password,
      expression: "formData.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      placeholder: "Password"
    },
    domProps: {
      value: _vm.formData.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.password ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.password[0]) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.password_confirmation,
      expression: "formData.password_confirmation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      placeholder: "Confirm Password"
    },
    domProps: {
      value: _vm.formData.password_confirmation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "password_confirmation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "text-center login-link"
  }, [_vm._v("\n                        Already have an account?\n                        "), _c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_vm._v("Login")])], 1)])])])])]);
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
  }, [_vm._v("\n                            Resister\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/auth/Resister.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/auth/Resister.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resister.vue?vue&type=template&id=08f46783& */ "./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783&");
/* harmony import */ var _Resister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resister.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Resister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Resister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Resister.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/auth/Resister.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Resister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resister.vue?vue&type=template&id=08f46783& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Resister.vue?vue&type=template&id=08f46783&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resister_vue_vue_type_template_id_08f46783___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);