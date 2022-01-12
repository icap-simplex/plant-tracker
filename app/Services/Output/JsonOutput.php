<?php

namespace App\Services\Output;

use App\Services\Output\Contracts\OutputService;
use Illuminate\Http\Resources\Json\JsonResource;

class JsonOutput implements OutputService
{
    /**
     * @param JsonResource $resource
     * @return mixed
     */
    public function respond(JsonResource $resource)
    {
        return $resource;
    }
}
