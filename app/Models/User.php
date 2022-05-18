<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $guarded = false;
    protected $table = 'users';

    public $timestamps = false;

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id', 'id');
    }
}
