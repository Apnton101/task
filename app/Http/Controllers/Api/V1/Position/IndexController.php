<?php

namespace App\Http\Controllers\Api\V1\Position;

use App\Http\Controllers\Controller;

use App\Http\Resources\Api\V1\Position\IndexResource;
use App\Models\Position;

class IndexController extends Controller
{

    public function __invoke()
    {
       return new IndexResource(Position::all());




    }
}
