<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Api\AuthController@login');
    Route::post('logout', 'Api\AuthController@logout');
    Route::post('refresh', 'Api\AuthController@refresh');
    Route::post('me', 'Api\AuthController@me');
    Route::post('payload', 'Api\AuthController@payload');
    Route::post('register', 'Api\AuthController@register');
    Route::apiResource('employees', 'Api\EmployeeController');
    Route::apiResource('suppliers', 'Api\SupplierController');
    Route::apiResource('customers', 'Api\CustomerController');
    Route::apiResource('categories', 'Api\CategoryController');
    Route::apiResource('products', 'Api\ProductController');
    Route::apiResource('expenses', 'Api\ExpenseController');
    Route::get('today/expenses', 'Api\ExpenseController@todayExpenses');
    Route::apiResource('salaries', 'Api\SalaryController');
    Route::post('stock/update/{id}', 'Api\StockController@stockUpdate');
    // Add to cart Route
    Route::Get('/addToCart/{id}', 'Api\CartController@addToCart');
    Route::Get('/cart/product', 'Api\CartController@cartProduct');
    Route::Get('/remove/cart/{id}', 'Api\CartController@removeCart');
    Route::Get('/increment/{id}', 'Api\CartController@increment');
    Route::Get('/decrement/{id}', 'Api\CartController@decrement');
    // Vat Route
    Route::Get('/vats', 'Api\CartController@Vats');
    // Pos Route
    Route::get('getting/product/{id}', 'Api\PosController@gettingProduct');
    Route::Post('/order_now', 'Api\PosController@orderNow');
    // Order Route
    Route::Get('/orders', 'Api\OrderController@order');
    Route::Get('/today/orders', 'Api\OrderController@todayOrder');
    Route::Get('/order/details/{id}', 'Api\OrderController@orderDetails');
    Route::post('/search/order', 'Api\OrderController@searchOrder');

    // Dashboard Route

    Route::Get('/today/sell', 'Api\DashboardController@todaySell');
    Route::Get('/today/income', 'Api\DashboardController@todayIncome');
    Route::Get('/today/due', 'Api\DashboardController@todayDue');
    Route::Get('/today/expense', 'Api\DashboardController@todayExpense');
    Route::Get('/today/stock_out', 'Api\DashboardController@stock_out');
});

Route::any('{any}', function () {
    return response()->json([
        'status' => 'error',
        'message' => 'Resource not found'
    ], 404);
})->where('any', '.*');
