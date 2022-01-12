import React from 'react';
import { Link } from "react-router-dom";

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-emerald-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-bold text-xl tracking-tight">Plant Tracker</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/"
                              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
