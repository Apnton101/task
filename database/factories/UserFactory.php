<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName($gender = null|'male'|'female'),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'url' => 'http://127.0.0.1:8000/storage/images/c74be51fa49781779c0717b54013927c.jpg',
            'path' => 'images/c74be51fa49781779c0717b54013927c.jpg',
            'position_id' => $this->faker->numberBetween(1, 5),
            'remember_token' => Str::random(10),
        ];
    }


}
