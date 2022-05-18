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
        return Storage::path('/public/images/') . $name;
    }

    public function resizeImage($source, $path, $width, $height)
    {
        try {
            $resized = $source->resize(array(
                "method" => "cover",
                "width" => $width,
                "height" => $height
            ));
             $resized->toFile($path);


        } catch (\Tinify\AccountException $e) {
            print("The error message is: " . $e->getMessage());
            // Verify your API key and account limit.
        } catch (\Tinify\ClientException $e) {
            print("The error message is: " . $e->getMessage());
            // Check your source image and request options.
        } catch (\Tinify\ServerException $e) {
            print("The error message is: " . $e->getMessage());
            // Temporary issue with the Tinify API.
        } catch (\Tinify\ConnectionException $e) {
            print("The error message is: " . $e->getMessage());
            // A network connection error occurred.
        } catch (Exception $e) {
            print("The error message is: " . $e->getMessage());
            // Something else went wrong, unrelated to the Tinify API.
        }


    }


}
