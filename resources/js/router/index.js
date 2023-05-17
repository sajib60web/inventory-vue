import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: require("../components/auth/Login.vue").default,
    },
    {
        path: "/logout",
        name: "logout",
        component: require("../components/auth/Logout.vue").default,
    },
    {
        path: "/resister",
        name: "resister",
        component: require("../components/auth/Resister.vue").default,
    },
    {
        path: "/forgot-password",
        name: "forgot_password",
        component: require("../components/auth/Forgot.vue").default,
    },

    // Admin
    {
        path: "/dashboard",
        name: "dashboard",
        component: require("../components/Dashboard.vue").default,
    },

    // Point Of Sale
    {
        path: "/pos",
        name: "pos",
        component: require("../components/pos/PointOfSale.vue").default,
    },

    // Employee
    {
        path: "/employees",
        name: "employees",
        component: require("../components/employee/Index.vue").default,
    },
    {
        path: "/employees/create",
        name: "employees_create",
        component: require("../components/employee/Create.vue").default,
    },
    {
        path: "/employees/edit/:id",
        name: "employees_edit",
        component: require("../components/employee/Edit.vue").default,
    },

    // Supplier
    {
        path: "/suppliers",
        name: "suppliers",
        component: require("../components/supplier/Index.vue").default,
    },
    {
        path: "/suppliers/create",
        name: "suppliers_create",
        component: require("../components/supplier/Create.vue").default,
    },
    {
        path: "/suppliers/edit/:id",
        name: "suppliers_edit",
        component: require("../components/supplier/Edit.vue").default,
    },

    // Customer
    {
        path: "/customers",
        name: "customers",
        component: require("../components/customer/Index.vue").default,
    },
    {
        path: "/customers/create",
        name: "customers_create",
        component: require("../components/customer/Create.vue").default,
    },
    {
        path: "/customers/edit/:id",
        name: "customers_edit",
        component: require("../components/customer/Edit.vue").default,
    },

    // Category
    {
        path: "/categories",
        name: "categories",
        component: require("../components/category/Index.vue").default,
    },
    {
        path: "/categories/create",
        name: "categories_create",
        component: require("../components/category/Create.vue").default,
    },
    {
        path: "/categories/edit/:id",
        name: "categories_edit",
        component: require("../components/category/Edit.vue").default,
    },

    // Product
    {
        path: "/products",
        name: "products",
        component: require("../components/product/Index.vue").default,
    },
    {
        path: "/products/create",
        name: "products_create",
        component: require("../components/product/Create.vue").default,
    },
    {
        path: "/products/edit/:id",
        name: "products_edit",
        component: require("../components/product/Edit.vue").default,
    },

    // Expense
    {
        path: "/expenses",
        name: "expenses",
        component: require("../components/expense/Index.vue").default,
    },
    {
        path: "/today/expenses",
        name: "today_expenses",
        component: require("../components/expense/Today_expense.vue").default,
    },
    {
        path: "/expenses/create",
        name: "expenses_create",
        component: require("../components/expense/Create.vue").default,
    },
    {
        path: "/expenses/edit/:id",
        name: "expenses_edit",
        component: require("../components/expense/Edit.vue").default,
    },

    // Salary
    {
        path: "/salaries",
        name: "salaries",
        component: require("../components/salary/Index.vue").default,
    },
    {
        path: "/salaries/create",
        name: "salaries_create",
        component: require("../components/salary/Create.vue").default,
    },
    {
        path: "/salaries/edit/:id",
        name: "salaries_edit",
        component: require("../components/salary/Edit.vue").default,
    },
    {
        path: "/view/salary/:id",
        name: "view_salary",
        component: require("../components/salary/View.vue").default,
    },

    // stock Routes
    {
        path: "/stocks",
        name: "stocks",
        component: require("../components/stock/Index.vue").default,
    },
    {
        path: "/edit/stock/:id",
        name: "edit_stock",
        component: require("../components/stock/EditStock.vue").default,
    },

    // Order Routes
    {
        path: "/orders",
        name: "orders",
        component: require("../components/order/Order.vue").default,
    },
    {
        path: "/view-order/:id",
        name: "view-order",
        component: require("../components/order/ViewOrder.vue").default,
    },

    {
        path: "/today/order",
        name: "today-order",
        component: require("../components/order/TodayOrder.vue").default,
    },

    {
        path: "/search/order",
        name: "search-order",
        component: require("../components/order/SearchOrder.vue").default,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
