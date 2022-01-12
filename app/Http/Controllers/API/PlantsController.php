<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\SavePlantRequest;
use App\Http\Resources\PlantResource;
use App\Repository\Contracts\Plant\Factory as PlantService;
use App\Services\Output\Contracts\OutputService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PlantsController extends Controller
{
    /**
     * @var PlantService
     */
    protected $plantRepository;

    /**
     * @var OutputService
     */
    protected $outputService;

    /**
     * @param PlantService $plantRepository
     * @param OutputService $outputService
     */
    public function __construct(PlantService $plantRepository, OutputService $outputService)
    {
        $this->plantRepository = $plantRepository;
        $this->outputService = $outputService;
    }

    /**
     * Get all plants
     *
     * @return mixed
     */
    public function index()
    {
        return $this->outputService->respond(
            PlantResource::collection($this->plantRepository->all())
        );
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

        return $this->outputService->respond(new PlantResource($plant));
    }
}
