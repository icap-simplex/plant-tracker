<?php

namespace App\Services\Output\Contracts;

use Illuminate\Http\Resources\Json\JsonResource;

interface OutputService
{
    /**
     * @param JsonResource $resource
     * @return mixed
     */
    public function respond(JsonResource $resource);
}
