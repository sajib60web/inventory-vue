<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <meta name="description" content="" />
    <meta name="author" content="Sajib Kumar Barai" />
    <title>{{ config('app.name') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/backend/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/backend/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/backend/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/backend/css/style.css') }}">
    <!--[if lt IE 9]>
		<script src="assets/js/html5shiv.min.js"></script>
		<script src="assets/js/respond.min.js"></script>
	<![endif]-->
    <style>
        .bg-red {
            background: red;
            color: #fff !important;
        }
    </style>
</head>

<body>
    <div id="app">
        <div id="authenticate"
            v-show="$route.path === '/' || $route.path === '/resister' || $route.path === '/forgot-password' ? false : true ">
            <div class="main-wrapper">
                <div class="header" id="header">
                    <div class="header-left">
                        <a href="index.html" class="logo">
                            <img src="{{ asset('assets/backend/img/logo.png') }}" width="35" height="35" alt="">
                            <span>IMS</span>
                        </a>
                    </div>
                    <a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
                    <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
                    <ul class="nav user-menu float-right">
                        <li class="nav-item dropdown d-none d-sm-block">
                            <a href="javascript:void(0);" id="open_msg_box" class="hasnotifications nav-link">
                                <i class="fa fa-comment-o"></i>
                                <span class="badge badge-pill bg-danger float-right">8</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown has-arrow">
                            <a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                                <span class="user-img">
                                    <img class="rounded-circle" src="{{ asset('assets/backend/img/user.jpg') }}"
                                        width="24" alt="Admin">
                                    <span class="status online"></span>
                                </span>
                                <span>Admin</span>
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="profile.html">My Profile</a>
                                <a class="dropdown-item" href="edit-profile.html">Edit Profile</a>
                                <a class="dropdown-item" href="settings.html">Settings</a>
                                <router-link class="dropdown-item" to="/logout">Logout</router-link>
                            </div>
                        </li>
                    </ul>
                    <div class="dropdown mobile-user-menu float-right">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="profile.html">My Profile</a>
                            <a class="dropdown-item" href="edit-profile.html">Edit Profile</a>
                            <a class="dropdown-item" href="settings.html">Settings</a>
                            <router-link class="dropdown-item" to="/logout">Logout</router-link>
                        </div>
                    </div>
                </div>
                <div class="sidebar" id="sidebar">
                    <div class="sidebar-inner slimscroll">
                        <div id="sidebar-menu" class="sidebar-menu">
                            <ul>
                                <li class="menu-title">Main</li>
                                <li>
                                    <router-link to="/dashboard">
                                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/pos" class="bg-red">
                                        <i class="fa fa-dashboard"></i> <span>POS</span>
                                    </router-link>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Employee</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/employees/create">
                                                Add Employee
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/employees">
                                                Employee List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Supplier</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/suppliers/create">
                                                Add Supplier
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/suppliers">
                                                Supplier List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Customer</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/customers/create">
                                                Add Customer
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/customers">
                                                Customer List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Category</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/categories/create">
                                                Add Category
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/categories">
                                                Category List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Product</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/products/create">
                                                Add Product
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products">
                                                Product List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Expense</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/expenses/create">
                                                Add Expense
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/expenses">
                                                Expense List
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/today/expenses">
                                                Today Expense
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="submenu">
                                    <a href="#">
                                        <i class="fa fa-user"></i>
                                        <span>Salary</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul style="display: none;">
                                        <li>
                                            <router-link to="/salaries/create">
                                                Add Salary
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/salaries">
                                                Salary List
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/stocks">
                                        <i class="fa fa-dashboard"></i> <span>Stock</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="page-wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div id="NotAuthenticate"
            v-show="$route.path === '/' || $route.path === '/resister' || $route.path === '/forgot-password' ? true : false ">
            <router-view></router-view>
        </div>
    </div>
    <div class="sidebar-overlay" data-reff=""></div>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('assets/backend/js/jquery-3.2.1.min.js') }}"></script>
    <script src="{{ asset('assets/backend/js/popper.min.js') }}"></script>
    {{-- <script src="{{ asset('assets/backend/js/bootstrap.min.js') }}"></script> --}}
    <script src="{{ asset('assets/backend/js/jquery.slimscroll.js') }}"></script>
    <script src="{{ asset('assets/backend/js/app.js') }}"></script>
    <script>
        let token = localStorage.getItem("token");
        if (token) {
            // console.log('Ok');
            document.getElementById("authenticate").style.display = "block";
            document.getElementById("NotAuthenticate").style.display = "none";
        } else {
            // console.log('No');
            document.getElementById("authenticate").style.display = "none";
            document.getElementById("NotAuthenticate").style.display = "block";
        }
    </script>
</body>

</html>