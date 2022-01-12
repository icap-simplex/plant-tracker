import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainNav from './Shared/MainNav';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.toast = React.createRef();
    }

    setToast(messages) {
        this.toast.current.setMessages(messages);
    }

    render() {
        return (
            <div>
                <MainNav />
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main/>, document.getElementById('main'));
}
