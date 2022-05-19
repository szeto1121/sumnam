//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Coaches from './coaches';
import SummerLeague from './summerleague';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />K
            <Route path = "/summerleague" component = {SummerLeague} />
            <Route path = "/coaches" component = {Coaches} />
        </Router>
    );
};
export default Webpages;