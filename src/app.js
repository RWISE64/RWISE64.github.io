import React, { Component } from "react";
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
    }

    toggleSidebar() {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        });
        console.log(this.state.sidebarOpen);
    }

    render() {
        return (
            <Router>
                <Header 
                    toggleSidebar={() => this.toggleSidebar()}
                />
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
                    <SidebarNavigation 
                        sidebarOpen={this.state.sidebarOpen}
                    />
                </div>
            </Router>
        );
    }
}

export default App;