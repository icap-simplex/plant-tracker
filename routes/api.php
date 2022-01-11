<?php

use App\Http\Controllers\API\PlantsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('plants')->group(function () {
        Route::get('/', [PlantsController::class, 'index']);
    });
});
