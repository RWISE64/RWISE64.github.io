import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
} from "react-router-dom";
import Header from "./header/header";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

export default function App() {
    return (
        <Router>
            <HeaderWarning />
            <Header />
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
        </Router>
    );
}

function HeaderWarning() {
    return (
        <div className={"header-warning"}>
            //  Under Constuction  //  Don't Mind the Garbage  //  Under Construction  //  Yes It's A Mess  //  Under Construction  //
        </div>
    );
}