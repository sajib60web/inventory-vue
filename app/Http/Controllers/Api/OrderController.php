<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function order()
    {
        $order = DB::table('orders')
            ->join('customers', 'orders.customer_id', 'customers.id')
            ->select('customers.name', 'orders.*')
            ->orderBy('orders.id', 'DESC')
            ->get();
        return response()->json($order);
    }

    public function todayOrder()
    {
        $order = DB::table('orders')
            ->join('customers', 'orders.customer_id', 'customers.id')
            ->whereDate('orders.order_date', Carbon::today())
            ->select('orders.*', 'customers.name')
            ->orderBy('orders.id', 'DESC')
            ->get();
        return response()->json($order);
    }


    public function orderDetails($id)
    {
        $order = DB::table('orders')
            ->join('customers', 'orders.customer_id', 'customers.id')
            ->where('orders.id', $id)
            ->select('customers.name', 'customers.phone_number', 'customers.address', 'orders.*')
            ->first();

        $order_details = DB::table('order_details')
            ->join('products', 'order_details.product_id', 'products.id')
            ->where('order_details.order_id', $id)
            ->select('products.product_name', 'products.product_code', 'products.image', 'order_details.*')
            ->get();
        return response()->json([
            'order' => $order,
            'order_details' => $order_details,
        ]);
    }

    public function searchOrder(Request $request)
    {
        $order = DB::table('orders')
            ->join('customers', 'orders.customer_id', 'customers.id')
            ->select('customers.name', 'orders.*')
            ->whereBetween('orders.order_date', [$request->form_date, $request->to_date])
            ->orderBy('orders.order_date', 'ASC')
            ->get();
        return response()->json($order);
    }
}
