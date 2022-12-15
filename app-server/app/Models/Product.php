<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Product extends Model {

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'desc',
        'price',
        'user_id'
    ];
    
    protected $hidden = [ 
        'file_path',
        'stripe_id',
        'user_id',
        'id'
    ];


    public function user() {
        return $this->belongsTo(User::class);
    }
}
