<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\SavePlantRequest;
use App\Http\Resources\PlantResource;
use App\Repository\Contracts\Plant\Factory as PlantService;
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
     * @param SavePlantRequest $request
     * @return PlantResource
     */
    public function store(SavePlantRequest $request): PlantResource
    {
        $plant = $this->plantRepository->create($request->all());

        $this->plantRepository->uploadImages($plant, $request);

        return new PlantResource($plant);
    }
}
