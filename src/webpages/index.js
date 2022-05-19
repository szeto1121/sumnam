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
            {/*<Routes>*/}
            {/*    <Route path = "/summerleague" ><SummerLeague/></Route>*/}
            {/*    <Route path = "/coaches"  ><Coaches/></Route>*/}
            {/*    <Route path = "/home"   ><Home/></Route>*/}
                {/*<Route exact path="/" component= {Home} />*/}
            {/*</Routes>*/}
                <Routes>
                <Route path="/summerleague" component={SummerLeague} />
                <Route path="/coaches" component={Coaches} />
                <Route path="*" component={Home} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default Webpages;