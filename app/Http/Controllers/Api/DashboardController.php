<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function todaySell()
    {
        $sell = DB::table('orders')
            ->where('order_date', date('Y-m-d'))
            ->sum('total');
        return response()->json($sell);
    }

    public function todayIncome()
    {
        $income = DB::table('orders')
            ->where('order_date', date('Y-m-d'))
            ->sum('pay');
        return response()->json($income);
    }

    public function todayDue()
    {
        $today_due = DB::table('orders')
            ->where('order_date', date('Y-m-d'))
            ->sum('due');
        return response()->json($today_due);
    }

    public function todayExpense()
    {
        $expense = DB::table('expenses')
            ->where('expense_date', date('Y-m-d'))
            ->sum('amount');
        return response()->json($expense);
    }

    public function stock_out()
    {
        $product = DB::table('products')
            ->where('product_quantity', '<', '1')
            ->get();
        return response()->json($product);
    }
}
