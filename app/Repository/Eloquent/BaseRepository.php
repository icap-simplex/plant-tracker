<?php

namespace App\Repository\Eloquent;

use Illuminate\Database\Eloquent\Model;
use App\Repository\Contracts\Model\Factory;
use Illuminate\Support\Collection;

class BaseRepository implements Factory
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Create model
     *
     * @param array $attr
     * @return Model
     */
    public function create(array $attr): Model
    {
        return $this->model->create($attr);
    }

    /**
     * Get all models
     *
     * @return Collection
     */
    public function all(): Collection
    {
        return $this->model->all();
    }
}
