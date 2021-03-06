<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/vi/users')) {
                return response()->json([
                    'success' => 'false',
                    'message' => 'Page not found'
                ], 404);
            }
        });

        $this->renderable(function (ValidationException $e, $request) {

            if ($request->is('api/*')) {
                return response()->json([
                    'success' => 'false',
                    'message' => 'Validation failed',
                    'fails' => $e->errors(),
                ], 422);
            }
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {

            if ($request->is('api/v1/users/*')) {
                return response()->json([
                    'success' => 'false',
                    'message' => 'The user with the requested identifier does not exist',
                    'fails' => [
                        'user_id' => 'User not found'
                    ]
                ], 404);
            }
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/vi/positions')) {
                return response()->json([
                    'success' => 'false',
                    'message' => 'Page not found'
                ], 404);
            }
        });

    }




}
