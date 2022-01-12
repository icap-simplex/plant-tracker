<?php

namespace App\Providers;

use App\Services\Output\Contracts\OutputService;
use App\Services\Output\JsonOutput;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(OutputService::class, JsonOutput::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
