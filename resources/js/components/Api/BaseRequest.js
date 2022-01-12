import { toast } from 'react-toastify';

export default class BaseRequest {
    get(url, callback) {
        axios.get(url)
            .then((response) => {
                if (callback) {
                    callback(response);
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }

    post(url, data, callback) {
        axios.post(url, data)
            .then((response) => {
                if (callback) {
                    callback(response);
                }
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }
}