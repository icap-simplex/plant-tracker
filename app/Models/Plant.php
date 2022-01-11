<?php

namespace App\Models;

use App\Models\Traits\Image\Imageable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    use HasFactory, Imageable;

    protected $fillable = [
        'name',
        'species',
        'watering_instructions',
    ];
}
