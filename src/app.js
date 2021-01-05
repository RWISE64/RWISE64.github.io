import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./header/header";
import SidebarNavigation from "./header/sidebar";
import About from "./about";
import GenericArticle from "./article/genericArticle"

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
        let blur = (this.state.sidebarOpen) ? "blur" : "";
        return (
            <Router>
                <Header
                    toggleSidebar={() => this.toggleSidebar()}
                />
                <div className={"content-area"}>
                    <div className={"content " + blur}>
                        <Switch>
                            <Route path="/blog">
                                <GenericArticle
                                    markdownName={"blog.md"}
                                    articleName={"Blog"}
                                />
                            </Route>
                            <Route path="/music">
                                <GenericArticle
                                    markdownName={"music.md"}
                                    articleName={"Music"}
                                />
                            </Route>
                            <Route path="/projects">
                                <GenericArticle
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
            </Router>
        );
    }
}

export default App;