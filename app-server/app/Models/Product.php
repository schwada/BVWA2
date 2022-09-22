<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Product extends Model {

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'desc',
        'price'
    ];
    
    protected $hidden = [ 
        'file_path',
        'stripe_id',
        'id'
    ];

}
