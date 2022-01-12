<?php

namespace App\Repository\Contracts\Plant;

use App\Models\Plant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

interface Factory
{
    /**
     * Get all plants
     *
     * @return Collection
     */
    public function all(): Collection;

    /**
     * Create plant
     *
     * @param array $attr
     * @return Model|Plant
     */
    public function create(array $attr): Model;

    /**
     * Upload multiple images
     *
     * @param Plant $plant
     * @param Request $request
     * @return void
     */
    public function uploadImages(Plant $plant, Request $request): void;
}
