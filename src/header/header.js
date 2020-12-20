import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: window.innerWidth <= 900,
            trueMobile: window.innerWidth <= 500,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                mobile: window.innerWidth <= 900,
                trueMobile: window.innerWidth <= 500,
            });
        });
    }

    render() {
        return (
            <div className={"header-banner"}>
                <HeaderLogo />
                { !this.state.mobile && <HeaderDesktopNavigation /> }
                { !this.state.trueMobile && <HeaderMotto /> }
                { this.state.mobile && <HeaderMobileNavigation /> }
            </div>
        );
    }
}

export default Header;

function HeaderLogo() {
    return (
        <Link
            className={"header-logo"}
            to={"/"}
        >
            <span className={"header-title"}>Robert Wise</span>
            <span className={"header-subtitle"}>Fledgling Developer</span>
        </Link>
    );
}

const linkParams = [
    { name: "About", href: "", icon: "user" },
    { name: "Blog", href: "blog", icon: "pen" },
    { name: "Music", href: "music", icon: "music" },
    { name: "Projects", href: "projects", icon: "keyboard" },
];

function HeaderDesktopNavigation() {
    let currentLink = window.location.pathname.split('/')[1];
    // Probably not good practice, but triggers this to rerender on url switch
    useLocation();

    const links = linkParams.map(link => {
        const active = (link.href === currentLink) ? "header-link-active" : "";
        return (
            <Link
                className={"header-link " + active}
                key={link.name}
                to={"/" + link.href}
            >
                <span>{link.name}</span>
                <FontAwesomeIcon icon={link.icon} />
            </Link>
        );
    });
    return (
        <nav className={"header-nav"}>
            {links}
        </nav>
    );
}

class HeaderMobileNavigation extends Component {
    render() {
        return (
            <div onClick={() => alert('yis')} class="header-burger">
                <FontAwesomeIcon icon={"bars"} />
            </div>
        );
    }
}

function HeaderMotto() {
    return (
        <span className={"header-motto"}>
            "We'll get there eventually."
        </span>
    );
}