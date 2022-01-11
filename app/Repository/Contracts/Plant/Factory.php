<?php

namespace App\Repository\Contracts\Plant;

use Illuminate\Database\Eloquent\Model;
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
     * @return Model
     */
    public function create(array $attr): Model;
}
