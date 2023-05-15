import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Components
const Login = require("../components/auth/Login.vue").default;

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import("../components/auth/Logout.vue"),
    },
    {
        path: "/resister",
        name: "resister",
        component: () => import("../components/auth/Resister.vue"),
    },
    {
        path: "/forgot-password",
        name: "forgot_password",
        component: () => import("../components/auth/Forgot.vue"),
    },

    // Admin
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../components/Dashboard.vue"),
    },

    // Employee
    {
        path: "/employees",
        name: "employees",
        component: () => import("../components/employee/Index.vue"),
    },
    {
        path: "/employees/create",
        name: "employees_create",
        component: () => import("../components/employee/Create.vue"),
    },
    {
        path: "/employees/edit/:id",
        name: "employees_edit",
        component: () => import("../components/employee/Edit.vue"),
    },

    // Supplier
    {
        path: "/suppliers",
        name: "suppliers",
        component: () => import("../components/supplier/Index.vue"),
    },
    {
        path: "/suppliers/create",
        name: "suppliers_create",
        component: () => import("../components/supplier/Create.vue"),
    },
    {
        path: "/suppliers/edit/:id",
        name: "suppliers_edit",
        component: () => import("../components/supplier/Edit.vue"),
    },

    // Category
    {
        path: "/categories",
        name: "categories",
        component: () => import("../components/category/Index.vue"),
    },
    {
        path: "/categories/create",
        name: "categories_create",
        component: () => import("../components/category/Create.vue"),
    },
    {
        path: "/categories/edit/:id",
        name: "categories_edit",
        component: () => import("../components/category/Edit.vue"),
    },

    // Product
    {
        path: "/products",
        name: "products",
        component: () => import("../components/product/Index.vue"),
    },
    {
        path: "/products/create",
        name: "products_create",
        component: () => import("../components/product/Create.vue"),
    },
    {
        path: "/products/edit/:id",
        name: "products_edit",
        component: () => import("../components/product/Edit.vue"),
    },

    // Expense
    {
        path: "/expenses",
        name: "expenses",
        component: () => import("../components/expense/Index.vue"),
    },
    {
        path: "/today/expenses",
        name: "today_expenses",
        component: () => import("../components/expense/Today_expense.vue"),
    },
    {
        path: "/expenses/create",
        name: "expenses_create",
        component: () => import("../components/expense/Create.vue"),
    },
    {
        path: "/expenses/edit/:id",
        name: "expenses_edit",
        component: () => import("../components/expense/Edit.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
