import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainNav from './Shared/MainNav';
import PlantList from './Plants/List';
import AddPlant from "./Plants/AddPlant";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                    <MainNav />
                    <Switch>
                        <Route exact path="/">
                            <PlantList />
                        </Route>
                        <Route path="/add-plant">
                            <AddPlant />
                        </Route>
                    </Switch>
                </Router>
                <ToastContainer />
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main/>, document.getElementById('main'));
}
