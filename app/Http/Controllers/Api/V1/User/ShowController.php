<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Requests\Api\V1\User\ShowRequest;
use App\Http\Resources\Api\V1\User\ShowResource;
use App\Models\User;

class ShowController extends BaseController
{

    public function __invoke(ShowRequest $request, User $user)
    {
        return new ShowResource($user);
    }
}
