<?php

namespace App\Repository\Contracts\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface Factory
{
    /**
     * Get all models
     *
     * @return Collection
     */
    public function all(): Collection;

    /**
     * Create model
     *
     * @param array $attr
     * @return Model
     */
    public function create(array $attr): Model;
}
