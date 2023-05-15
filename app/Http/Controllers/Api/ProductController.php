<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Intervention\Image\Facades\Image as Image;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required',
            'product_name' => 'required|max:191',
            'product_code' => 'max:191',
            'buying_price' => 'required|max:191',
            'selling_price' => 'required|max:191',
            'product_quantity' => 'required|max:191',
            'supplier_id' => 'required',
            'buying_date' => 'required|max:20',
            'image' => 'required',
        ]);

        $input = $request->all();
        if ($request->image) {
            $position = strpos($request->image, ';');
            $sub = substr($request->image, 0, $position);
            $ext = explode('/', $sub)[1];
            $name = time() . "." . $ext;
            $img = Image::make($request->image)->resize(240, 200);
            $upload_path = 'assets/products/';
            $image_url = $upload_path . $name;
            $img->save($image_url);
            $input['image'] = $image_url;
        }
        Product::create($input);
        return response('inserted');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required',
            'product_name' => 'required|max:191',
            'product_code' => 'max:191',
            'buying_price' => 'required|max:191',
            'selling_price' => 'required|max:191',
            'product_quantity' => 'required|max:191',
            'supplier_id' => 'required',
            'buying_date' => 'required|max:20',
        ]);

        $input = $request->all();
        $product = Product::findOrFail($id);
        if ($request->new_image) {
            if (file_exists($product->image)) {
                unlink($product->image);
            }
            $position = strpos($request->new_image, ';');
            $sub = substr($request->new_image, 0, $position);
            $ext = explode('/', $sub)[1];
            $name = time() . "." . $ext;
            $img = Image::make($request->new_image)->resize(240, 200);
            $upload_path = 'assets/products/';
            $image_url = $upload_path . $name;
            $img->save($image_url);
            $input['image'] = $image_url;
        }
        $product->update($input);
        return response('updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        if (file_exists($product->image)) {
            unlink($product->image);
        }
        $product->delete();
        return response('deleted');
    }
}
