<?php

namespace App\Models\Traits\Image;

use Illuminate\Database\Eloquent\Relations\MorphTo;

trait HasImageRelations
{
    /**
     * Get the parent imageable model
     *
     * @return MorphTo
     */
    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
