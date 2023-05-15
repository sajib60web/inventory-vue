(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js& ***!
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
        phone_number: "",
        shop_name: "",
        address: "",
        photo: "",
        new_photo: ""
      },
      errors: {}
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!User.isLoggedIn()) {
      this.$router.push("/");
    }
    var id = this.$route.params.id;
    axios.get("/api/auth/suppliers/" + id).then(function (response) {
      _this.formData = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    employeeUpdate: function employeeUpdate() {
      var _this2 = this;
      var id = this.$route.params.id;
      axios.patch("/api/auth/suppliers/" + id, this.formData).then(function (response) {
        Toast.fire({
          icon: "success",
          title: "Supplier updated successfully"
        });
        _this2.$router.push("/suppliers");
      })["catch"](function (error) {
        if (error.response.data.errors) {
          _this2.errors = error.response.data.errors;
        } else {
          _this2.errors = {};
          Notification.error();
        }
      });
    },
    onFileSelected: function onFileSelected(event) {
      var _this3 = this;
      var file = event.target.files[0];
      if (file.size > 1048770) {
        Notification.image_validation();
      } else {
        var reader = new FileReader();
        reader.onload = function (event) {
          _this3.formData.photo = event.target.result;
          _this3.formData.new_photo = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateImage: function updateImage() {
      var img = this.formData.photo;
      if (img.length > 100) {
        return this.formData.photo;
      } else {
        return "/".concat(this.formData.photo);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2& ***!
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
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("div", {
    staticClass: "card-box"
  }, [_vm._m(1), _vm._v(" "), _c("form", {
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.employeeUpdate.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
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
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.name[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
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
      type: "email",
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
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.email[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Phone Number")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.phone_number,
      expression: "formData.phone_number"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Phone Number"
    },
    domProps: {
      value: _vm.formData.phone_number
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "phone_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.phone_number ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.phone_number[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Address")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.address,
      expression: "formData.address"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Address"
    },
    domProps: {
      value: _vm.formData.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.address ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.address[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Shop Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.shop_name,
      expression: "formData.shop_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Shop Name"
    },
    domProps: {
      value: _vm.formData.shop_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "shop_name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Photo")]), _vm._v(" "), _c("input", {
    staticClass: "form-control-file",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.onFileSelected
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4 text-center"
  }, [_c("img", {
    staticStyle: {
      height: "70px",
      width: "70px",
      border: "1px solid #ddd"
    },
    attrs: {
      src: _vm.updateImage()
    }
  })])])])]), _vm._v(" "), _vm._m(2)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12"
  }, [_c("h4", {
    staticClass: "page-title"
  }, [_vm._v("Edit Employee")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-block"
  }, [_c("h6", {
    staticClass: "card-title text-bold"
  }, [_vm._v("Edit Employee")]), _vm._v(" "), _c("hr")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-right"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                            Update\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/supplier/Edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/supplier/Edit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=64e045d2& */ "./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/supplier/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/supplier/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=64e045d2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/supplier/Edit.vue?vue&type=template&id=64e045d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_64e045d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);