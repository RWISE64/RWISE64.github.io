import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, 
} from "react-router-dom";
import Header from "./header/header";
import SidebarNavigation from "./header/sidebar";
import About from "./about";
import Blog from "./blog";
import Music from "./music";
import Projects from "./projects";

export default function App() {
    return (
        <Router>
            <Header />
            <div className="content-area">
                <div className="content">
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
                </div>
                <SidebarNavigation />
            </div>
        </Router>
    );
}