<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product_name',
        'product_code',
        'category_id',
        'supplier_id',
        'root',
        'buying_price',
        'selling_price',
        'product_quantity',
        'buying_date',
        'image',
    ];
}
