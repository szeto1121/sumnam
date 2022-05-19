//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter,
  Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './home';
import Coaches from './coaches';
import SummerLeague from './summerleague';
function Webpages() {
    return(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/summerleague">Topics</Link>
                    </li>
                </ul>

                <hr />
                <Routes>
                    <Route path="/summerleague" element={<SummerLeague/>} />
                    <Route path="/coaches" element={<Coaches/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<div>404NotFound</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default Webpages;