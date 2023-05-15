(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: {
        product_name: "",
        product_code: "",
        category_id: "",
        supplier_id: "",
        root: "",
        buying_price: "",
        selling_price: "",
        product_quantity: "",
        buying_date: "",
        image: "",
        new_image: ""
      },
      errors: {},
      categories: {},
      suppliers: {}
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!User.isLoggedIn()) {
      this.$router.push("/");
    }
    var id = this.$route.params.id;
    axios.get("/api/auth/categories").then(function (_ref) {
      var data = _ref.data;
      return _this.categories = data;
    });
    axios.get("/api/auth/suppliers").then(function (_ref2) {
      var data = _ref2.data;
      return _this.suppliers = data;
    });
    axios.get("/api/auth/products/" + id).then(function (response) {
      _this.formData = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    productUpdate: function productUpdate() {
      var _this2 = this;
      var id = this.$route.params.id;
      axios.patch("/api/auth/products/" + id, this.formData).then(function (response) {
        Toast.fire({
          icon: "success",
          title: "Product updated successfully"
        });
        _this2.$router.push("/products");
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
          _this3.formData.image = event.target.result;
          _this3.formData.new_image = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateImage: function updateImage() {
      var img = this.formData.image;
      if (img.length > 100) {
        return this.formData.image;
      } else {
        return "/".concat(this.formData.image);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        return _vm.productUpdate.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.product_name,
      expression: "formData.product_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Your Product Name"
    },
    domProps: {
      value: _vm.formData.product_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "product_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.product_name ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.product_name[0]))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Code")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.product_code,
      expression: "formData.product_code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Your Product Code"
    },
    domProps: {
      value: _vm.formData.product_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "product_code", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Category")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.category_id,
      expression: "formData.category_id"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "category_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("\n                                        Select Product Category\n                                    ")]), _vm._v(" "), _vm._l(_vm.categories, function (category) {
    return _c("option", {
      domProps: {
        value: category.id
      }
    }, [_vm._v("\n                                        " + _vm._s(category.category_name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _vm.errors.category_id ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.category_id[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Supplier")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.supplier_id,
      expression: "formData.supplier_id"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "supplier_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("\n                                        Select Product Supplier\n                                    ")]), _vm._v(" "), _vm._l(_vm.suppliers, function (supplier) {
    return _c("option", {
      domProps: {
        value: supplier.id
      }
    }, [_vm._v("\n                                        " + _vm._s(supplier.name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _vm.errors.supplier_id ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.supplier_id[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Root")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.root,
      expression: "formData.root"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Your Product Root"
    },
    domProps: {
      value: _vm.formData.root
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "root", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Buying Price")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.buying_price,
      expression: "formData.buying_price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Your Buying Price"
    },
    domProps: {
      value: _vm.formData.buying_price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "buying_price", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.buying_price ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.buying_price[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Selling Price")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.selling_price,
      expression: "formData.selling_price"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Enter Your Selling Price"
    },
    domProps: {
      value: _vm.formData.selling_price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "selling_price", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.selling_price ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.selling_price[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Product Quantity")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.product_quantity,
      expression: "formData.product_quantity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      placeholder: "Enter Your Product Quantity"
    },
    domProps: {
      value: _vm.formData.product_quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "product_quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.product_quantity ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.product_quantity[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Buying Date")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.buying_date,
      expression: "formData.buying_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.formData.buying_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "buying_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.buying_date ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errors.buying_date[0]) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Image")]), _vm._v(" "), _c("input", {
    staticClass: "form-control-file",
    attrs: {
      type: "file"
    },
    on: {
      change: function change($event) {
        return _vm.onFileSelected($event);
      }
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

/***/ "./resources/js/components/product/Edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/product/Edit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5e90c3d6& */ "./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/product/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5e90c3d6& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Edit.vue?vue&type=template&id=5e90c3d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5e90c3d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);