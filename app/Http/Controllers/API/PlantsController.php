<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlantResource;
use App\Models\Plant;
use App\Repository\Contracts\Plant\Factory as PlantService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PlantsController extends Controller
{
    /**
     * @var PlantService
     */
    protected $plantRepository;

    /**
     * @param PlantService $plantRepository
     */
    public function __construct(PlantService $plantRepository)
    {
        $this->plantRepository = $plantRepository;
    }

    /**
     * Get all plants
     *
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return PlantResource::collection($this->plantRepository->all());
    }

    /**
     * Store a newly created plant
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
}
