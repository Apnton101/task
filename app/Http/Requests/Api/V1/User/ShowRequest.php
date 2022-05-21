<?php

namespace App\Http\Requests\Api\V1\User;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\Console\Input\Input;

class ShowRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */


    public function rules()
    {

        return [
            'user' => 'integer'
        ];

    }

    public function messages()
    {
        return [
            'user.integer' => "The user_id must be an integer.",


        ];
    }
}
