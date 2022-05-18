<?php

namespace App\Http\Resources\Api\V1\User;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IndexResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = false;
    private $pagination;

    public function __construct($resource)
    {

        $this->pagination = [
            'success' => true,
            'total_pages' => $resource->lastPage(),
            'total_users' => $resource->total(),
            'count' => $resource->count(),
            'page' => $resource->currentPage(),
            'links' => [
                'next_url' => $resource->nextPageUrl() !== null ? $resource->nextPageUrl() . '&count=' . $resource->count() : null,
                'prev_url' => $resource->previousPageUrl() !== null ? $resource->previousPageUrl() . '&count=' . $resource->count() : null,
            ]

        ];

        $resource = $resource->getCollection();
        parent::__construct($resource);


    }

    public function toArray($request)
    {

        return [
            'pagination' => $this->pagination,
            'users' => $this->collection->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'email' => $item->email,
                    'phone' => $item->phone,
                    'position' => $item->position->title,
                    'position_id' => $item->position_id,
                    'registration_timestamp' => Carbon::parse($item->registration_timestamp)->isoFormat('X'),
                    'photo' => $item->url,
                ];
            }),

        ];
    }
}
