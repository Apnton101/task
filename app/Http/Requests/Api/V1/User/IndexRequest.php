<?php

namespace App\Http\Requests\Api\V1\User;

use Illuminate\Foundation\Http\FormRequest;



class IndexRequest extends FormRequest
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
            'count' => 'integer|min:1|max:100',
            'page' => 'integer|min:1'

        ];

    }

    public function messages()
    {

        return [
            'count.integer' => 'The count must be an integer.',
            'page.integer|min:1' => 'The page must be at least 1'


        ];

    }


}
