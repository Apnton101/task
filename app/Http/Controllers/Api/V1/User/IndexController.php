<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Requests\Api\V1\User\IndexRequest;
use App\Http\Resources\Api\V1\User\IndexResource;
use App\Models\User;

class IndexController extends BaseController
{

    public function __invoke(IndexRequest $request)
    {
        $count = $request->count ?? 5;
        $users = User::orderBy('id', 'desc')->paginate($count);

        return new IndexResource($users);

    }
}
