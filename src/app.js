import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, 
} from "react-router-dom";
import Header from "./header/header";
import About from "./about";
import Blog from "./blog";
import Music from "./music";
import Projects from "./projects";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}