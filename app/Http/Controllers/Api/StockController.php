<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class StockController extends Controller
{
    public function stockUpdate(Request $request, $id)
    {
        $request->validate([
            'product_quantity' => 'required|max:191',
        ]);

        $input = $request->all();
        $product = Product::findOrFail($id);
        $product->update($input);
        return response('updated');
    }
}
