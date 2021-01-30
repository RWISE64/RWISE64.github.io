import React, { Component } from "react";
import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";
import Header from "./header/header";
import SidebarNavigation from "./header/sidebar";
import About from "./about";
import GenericPost from "./article/genericPost"
import Blog from "./blog";
import MusicPerformance from "./article/musicPerformance";


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
                                <MusicPerformance
                                    songName={"Lonely Town"}
                                    date={"1/29/21"}
                                    url={"https://vimeo.com/506362883"}
                                    markdownName={"music/lonelyTown.md"}
                                />
                            </Route>
                            <Route path="/projects">
                                <GenericPost
                                    markdownName={"projects.md"}
                                    articleName={"Projects"}
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

