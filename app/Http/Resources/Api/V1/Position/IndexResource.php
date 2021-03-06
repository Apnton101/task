<?php

namespace App\Http\Resources\Api\V1\Position;

use Illuminate\Http\Resources\Json\ResourceCollection;

class IndexResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */


    public function toArray($request)
    {
        return [
            'success' => true,

            'positions' => $this->collection->map(function ($item) {
                return [
                    'id' => $item->id,
                    'position' => $item->title,

                ];
            }),

        ];
    }
}
