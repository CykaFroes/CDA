import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import App from './App.js';
import About from './components/About.jsx';


const Routes = () => {
    return (
        <Router>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route path="/" exact>
                    <App />
                </Route>
                <Route path="/sobre">
                    <About />
                </Route>
            </AnimatedSwitch>
        </Router>
    )
}


export default Routes