<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Controllers\Controller;
use App\Service\UserService;


class BaseController extends Controller
{

    public $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }
}
