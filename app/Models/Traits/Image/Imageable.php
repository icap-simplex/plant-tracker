<?php

namespace App\Models\Traits\Image;

use App\Models\Image;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait Imageable
{
    /**
     * Get all the model's images
     *
     * @return MorphMany
     */
    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
