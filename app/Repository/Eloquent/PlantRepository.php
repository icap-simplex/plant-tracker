<?php

namespace App\Repository\Eloquent;

use App\Models\Plant;
use App\Repository\Contracts\Plant\Factory;

class PlantRepository extends BaseRepository implements Factory
{
    /**
     * @param Plant $model
     */
    public function __construct(Plant $model)
    {
        parent::__construct($model);
    }
}
