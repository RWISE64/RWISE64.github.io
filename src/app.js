import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/stuff">Stuff</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/stuff">
                            <Stuff />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </nav>
            </div>
        </Router>
    );
}