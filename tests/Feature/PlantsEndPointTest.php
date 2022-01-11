<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class PlantsEndPointTest extends TestCase
{
    /**
     * Check if the plants listing endpoint ([GET] /api/v1/plants) returns correct data
     *
     * @return void
     */
    public function test_list_all_plants()
    {
        $response = $this->get('/api/v1/plants');

        $response->assertStatus(200)
            ->assertJsonStructure()
            ->assertJson(function (AssertableJson $json) {
                $json->has('data');
            });
    }

    /**
     * Test adding new a new plant
     *
     * @return void
     */
    public function test_add_new_plant()
    {
        Storage::fake('local');

        $files = [
            UploadedFile::fake()->image('plant-picture.jpg'),
        ];

        $response = $this->post('/api/v1/plants', [
            'name' => 'Blue Oak',
            'species' => 'Quercus douglasii',
            'watering_instructions' => 'Lorem ipsum dolor set amet.',
            'files' => $files,
        ]);

        foreach ($files as $file) {
            Storage::disk('local')->assertExists('/public/plants/photos/' . $file->getClientOriginalName());
        }

        $response->assertStatus(201);
    }
}
