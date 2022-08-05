<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model {

    protected $table = 'users';
    
    protected $fillable = [
        'uuid',
        'email',
        'first_name',
        'last_name',
        'display',
        'password'
    ];

    protected $hidden = [ 
        'id',
        'password',
        'remember_token'
    ];
    
    // protected $guarded = [];
    // protected $casts = [
    //     'email_verified_at' => 'datetime'
    // ];

}
