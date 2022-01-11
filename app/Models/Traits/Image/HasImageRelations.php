<?php

namespace App\Models\Traits\Image;

trait HasImageRelations
{
    /**
     * Get the parent imageable model
     *
     * @return mixed
     */
    public function imageable()
    {
        return $this->morphTo();
    }
}
