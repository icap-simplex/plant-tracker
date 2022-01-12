import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { toast } from 'react-toastify';

class AddPlant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            species: '',
            wateringInstructions: '',
            photo: null,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    saveData(event) {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', this.state.name);
        formData.append('species', this.state.species);
        formData.append('watering_instructions', this.state.wateringInstructions);
        formData.append('files[]', this.state.photo);

        const url = '/api/v1/plants';

        axios.post(url, formData)
            .then(function (response) {
                this.props.history.push('/');
                toast.success('You have successfully added a new plant.');
            }.bind(this))
            .catch(function(error) {
                toast.error(error.response.data.message);
            }.bind(this))
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="max-w-2xl rounded overflow-hidden shadow-lg p-5 mx-auto mt-5">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate mb-10 text-left">
                    New Plant
                </h2>
                <div className="lg:w-full max-w-2xl">
                    <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    required
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Species
                                </label>
                                <input
                                    required
                                    value={this.state.species}
                                    onChange={this.handleInputChange}
                                    name="species"
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Watering Instructions
                            </label>
                            <textarea
                                required
                                value={this.state.wateringInstructions}
                                onChange={this.handleInputChange}
                                name="wateringInstructions"
                                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                rows={3}>
                            </textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Photo
                            </label>
                            <div className="mb-2">
                                <div
                                    className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                    <div className="absolute">
                                        <div className="flex flex-col items-center ">
                                            <span className="block text-gray-400 font-normal">Drop your file here</span>
                                            <span className="block text-gray-400 font-normal">or</span>
                                            <span className="block text-blue-400 font-normal">Browse files</span></div>
                                    </div>
                                    <input
                                        onChange={(event) => {this.setState({photo: event.target.files[0]})}}
                                        name="photo"
                                        type="file"
                                        className="h-full w-full opacity-0" />
                                </div>
                                <div className="text-gray-400 text-center"><span>Accepted file type: png, jpg and gif only</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full text-left px-3">
                            <button
                                onClick={this.saveData}
                                className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
                                Save Plant
                            </button>
                            <Link to="/"
                                  className="text-gray-400 hover:underline font-normal py-2 px-4 ml-1">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddPlant);