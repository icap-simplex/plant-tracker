<?php

namespace App\Repository\Eloquent;

use App\Models\Image;
use App\Models\Plant;
use App\Repository\Contracts\Plant\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PlantRepository extends BaseRepository implements Factory
{
    /**
     * @param Plant $model
     */
    public function __construct(Plant $model)
    {
        parent::__construct($model);
    }

    /**
     * Upload multiple plant images
     *
     * @param Plant $plant
     * @param Request $request
     * @return void
     */
    public function uploadImages(Plant $plant, Request $request): void
    {
        if (!$request->hasFile('files')) {
            return;
        }

        $allowedfileExtension=['gif','jpg','png'];

        $files = $request->allFiles();

        foreach ($files as $fileArray) {
            foreach ($fileArray as $file) {
                $extension = $file->getClientOriginalExtension();

                $check = in_array($extension, $allowedfileExtension);

                if (!$check) {
                    continue;
                }

                $name = $file->getClientOriginalName();
                $type = 'image/' . $extension;
                $path = $file->storeAs('public/plants/photos', $name, 'local');

                $plant->images()->save(
                    new Image([
                        'type' => $type,
                        'path' => str_replace('public', 'storage', $path),
                    ])
                );
            }
        }
    }
}
