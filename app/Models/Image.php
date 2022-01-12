<?php

namespace App\Models;

use App\Models\Traits\Image\HasImageRelations;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory, HasImageRelations;

    /**
     * @var string[]
     */
    protected $fillable = [
        'type',
        'path',
        'imageable_id',
        'imageable_type',
    ];
}
