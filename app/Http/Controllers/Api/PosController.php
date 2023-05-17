<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use DateTime;
use Illuminate\Support\Facades\DB;

class PosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function gettingProduct($id)
    {
        $products = Product::where('category_id', $id)->get();
        return response()->json($products);
    }

    public function orderNow(Request $request)
    {
        $request->validate([
            'customer_id' => 'required',
            'payment_method' => 'required',
        ]);

        $data = array();
        $data['customer_id'] = $request->customer_id;
        $data['qty'] = $request->qty;
        $data['sub_total'] = $request->subtotal;
        $data['vat'] = $request->vat;
        $data['total'] = $request->total;
        $data['pay'] = $request->pay;
        $data['due'] = $request->due;
        $data['payment_method'] = $request->payment_method;
        $data['order_date'] = date('Y-m-d');
        $data['order_month'] = date('F');
        $data['order_year'] = date('Y');
        $order_id = DB::table('orders')->insertGetId($data);
        $contents = DB::table('pos')->get();
        $oData = array();
        foreach ($contents as $content) {
            $oData['order_id'] = $order_id;
            $oData['product_id'] = $content->pro_id;
            $oData['pro_quantity'] = $content->pro_quantity;
            $oData['product_price'] = $content->product_price;
            $oData['sub_total'] = $content->sub_total;
            DB::table('order_details')->insert($oData);
            DB::table('products')
                ->where('id', $content->pro_id)
                ->update(['product_quantity' => DB::raw('product_quantity -' . $content->pro_quantity)]);
        }
        DB::table('pos')->delete();
        return response('Done');
    }
}
