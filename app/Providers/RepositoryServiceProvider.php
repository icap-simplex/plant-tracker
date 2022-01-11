<?php

namespace App\Providers;

use App\Repository\Contracts\Plant\Factory as PlantService;
use App\Repository\Eloquent\PlantRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PlantService::class, PlantRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
