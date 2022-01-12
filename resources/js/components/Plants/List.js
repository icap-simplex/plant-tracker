import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="flex flex-col mt-8 mx-5">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-3">
                    List of Plants
                </h2>
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                            <tr>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    ID
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Photo
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Name
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Species
                                </th>
                                <th
                                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                    Watering Instructions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white">
                                <ListItem />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
