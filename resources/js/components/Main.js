import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainNav from './Shared/MainNav';
import PlantList from './Plants/List';
import AddPlant from "./Plants/AddPlant";


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
                <Router>
                    <Routes>
                        <Route exact path="/" element={<PlantList />} />
                        <Route path="/add-plant" element={<AddPlant />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main/>, document.getElementById('main'));
}
