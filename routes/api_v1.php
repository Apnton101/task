<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/users', '\App\Http\Controllers\Api\V1\User\IndexController');
Route::post('/users', '\App\Http\Controllers\Api\V1\User\StoreController');
Route::get('/positions', '\App\Http\Controllers\Api\V1\Position\IndexController');
Route::get('/users/{user}', '\App\Http\Controllers\Api\V1\User\ShowController');
Route::get('/token', '\App\Http\Controllers\AuthController@token');


Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {

    Route::post('login', '\App\Http\Controllers\AuthController@login');
    Route::post('me', '\App\Http\Controllers\AuthController@me');

});





