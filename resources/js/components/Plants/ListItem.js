import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    displayPhoto() {
        const plant = this.props.plant;
        let url = 'https://via.placeholder.com/150/000000/FFFFFF/?text=No Photo';

        if (plant.photos.length > 0) {
            url = plant.photos[0].url;
        }

        return (
            <div className="flex items-center">
                <div className="flex-shrink-0 w-20 h-20">
                    <img className="w-20 h-20" src={url}
                         alt={plant.name} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">{this.props.plant.id}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {this.displayPhoto()}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">{this.props.plant.name}</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">{this.props.plant.species}</div>
                </td>

                <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                    {this.props.plant.watering_instructions}
                </td>
            </tr>
        );
    }
}
