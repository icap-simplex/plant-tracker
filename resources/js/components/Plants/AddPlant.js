import React from 'react';

export default class AddPlant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 mx-auto mt-5">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate mb-8 text-center">
                    New Plant
                </h2>
                <form className="lg:w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Species
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Watering Instructions
                            </label>
                            <textarea
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
                                    <input type="file" className="h-full w-full opacity-0" name="" />
                                </div>
                                <div className="text-gray-400 text-center"><span>Accepted file type: png, jpg and gif only</span></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
