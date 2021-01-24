import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import linkParams from "./links";
import "./header.css";

function Header(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const mobileBreakpoint = 900;
    const trueMobileBreakpoint = 500;

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    let mobile = width <= mobileBreakpoint;
    let trueMobile = width <= trueMobileBreakpoint;

    return (
        <div className={"header"}>
            <HeaderLogo />
            { !mobile && <HeaderDesktopNavigation />}
            { !trueMobile && <HeaderMotto />}
            { mobile && <HeaderBurger toggleSidebar={() => props.toggleSidebar()}/>}
        </div>
    );
}

export default Header;

function HeaderLogo() {
    return (
        <Link
            className={"header-logo"}
            to={"/"}
        >
            <span className={"header-title"}>Robert&nbsp;Wise</span>
            <span className={"header-subtitle"}>Fledgling&nbsp;Developer</span>
        </Link>
    );
}

function HeaderDesktopNavigation() {
    function getCurrentLink() {
        return window.location.href.split('/')[4];
    }

    const [currentLink, setCurrentLink] = useState(getCurrentLink());

    const links = linkParams.map(link => {
        const active = (link.href === currentLink) ? "header-link-active" : "";
        return (
            <Link
                className={"header-link " + active}
                key={link.name}
                to={"/" + link.href}
                /* 
                Far from ideal solution, but works fairly well.
                Want active link to update onclick, but the link doesn't actually update until a split second later
                */
                onClick={() => {
                    setTimeout(() => setCurrentLink(getCurrentLink()), 1);
                }}
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



class HeaderBurger extends Component {
    render() {
        return (
            <>
                <div onClick={() => this.props.toggleSidebar()} className="header-burger">
                    <FontAwesomeIcon icon={"bars"} />
                </div>
            </>
        );
    }
}

function HeaderMotto() {
    return (
        <span className={"header-motto"}>
            "We'll&nbsp;get&nbsp;there&nbsp;eventually."
        </span>
    );
}