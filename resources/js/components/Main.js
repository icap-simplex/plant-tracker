import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


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
                <Router>
                    <div className="container">
                        Home
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main/>, document.getElementById('main'));
}
