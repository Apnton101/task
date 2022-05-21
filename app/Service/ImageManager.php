<?php

namespace App\Service;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Tinify\Exception;


class ImageManager
{
    public function optimizeImage($image)
    {

        \Tinify\setKey(env('API_KEY'));

        $source = \Tinify\fromFile($image->path());

        $name = $this->fileName($image);
        $path = $this->filePath($name);
        $source->toFile($path);
        $this->resizeImage($source, $path, 70, 70);

        return $image = [
            'path' => 'images/' . $name,
            'url' => url('/storage/images/' . $name)
        ];

    }


    public function fileName($image)
    {
        return md5(Carbon::now() . '_' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
    }


    public function filePath($name)
    {
        return Storage::path('public/images/') . $name;
    }

    public function resizeImage($source, $path, $width, $height)
    {
        $resized = $source->resize(array(
            "method" => "cover",
            "width" => $width,
            "height" => $height
        ));
        $resized->toFile($path);


    }


}
