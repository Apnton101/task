<?php

namespace App\Http\Requests\Api\V1\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
            'name' => 'required|string|min:2|max:60',
            'email' => 'required|email',
            'phone' => 'required|regex:/^\+380\d{3}\d{2}\d{2}\d{2}$/',
            'position_id' => 'integer|required',
            'image' => 'nullable|image|max:5'


        ];

    }

    public function messages()
    {
        return [
            'name.required|string|min:2' => 'The name must be at least 2 characters.',
            'email.required|email' => 'The email must be a valid email address.',
            'phone.required' => 'The phone field is required.',
            'position_id.integer|required' => 'The position id must be an integer.',
            'image.nullable|image|max:5' => ['The photo may not be greater than 5 Mbytes', 'Image is invalid.']

        ];
    }


}
