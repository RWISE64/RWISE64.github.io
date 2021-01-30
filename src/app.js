import React, { Component } from "react";
import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import Header from "./header/header";
import SidebarNavigation from "./header/sidebar";
import About from "./about";
import GenericPost from "./templates/genericPost"
import Blog from "./blog";
import Music from "./music";


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
    }

    render() {
        let blur = (this.state.sidebarOpen) ? " blur" : "";

        return (
            <HashRouter>
                <Header
                    toggleSidebar={() => this.toggleSidebar()}
                />
                <div className={"content-area"} id={"content-area"}>
                    <div className={"content" + blur}>
                        <Switch>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/music">
                                <Music />
                            </Route>
                            <Route path="/projects">
                                <GenericPost
                                    markdownName={"projects.md"}
                                    postName={"Projects"}
                                />
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
            </HashRouter>
        );
    }
}

export default App;

