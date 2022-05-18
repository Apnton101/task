<?php

namespace App\Service;

use App\Models\User;


class UserService
{

    private $imageManager;

    public function __construct(ImageManager $imageManager)
    {

        $this->imageManager = $imageManager;
    }


    public function store($data)
    {
        if (isset($data['image'])) {
            $image = $this->imageManager->optimizeImage($data['image']);
            unset($data['image']);
        }

        User::firstOrCreate($image, $data);

        return response()->json(['message' => 'success']);

    }


}
