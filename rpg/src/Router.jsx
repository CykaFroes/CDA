import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App.js';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}


export default Routes