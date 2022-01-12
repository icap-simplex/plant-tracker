import BaseRequest from "./BaseRequest";

class PlantRequest extends BaseRequest {
    getAll(callback) {
        this.get('/api/v1/plants', callback);
    }

    addPlant(data, callback) {
        this.post('/api/v1/plants', data, callback);
    }
}

export default new PlantRequest();