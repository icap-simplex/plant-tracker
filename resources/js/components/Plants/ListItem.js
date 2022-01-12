import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">1</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-20 h-20">
                            <img className="w-20 h-20" src="https://source.unsplash.com/user/erondu"
                                 alt="admin dashboard ui" />
                        </div>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">Plant name here</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">Species here</div>
                </td>

                <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    Lorem ipsum dolor set amet.
                </td>
            </tr>
        );
    }
}
