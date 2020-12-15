import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

export default function Header() {
    return (
        <div className={"header-banner"}>
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderMotto />
        </div>
    );
}

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

function HeaderNavigation() {
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

function HeaderMotto() {
    return (
        <span className={"header-motto"}>
            "We'll get there eventually."
        </span>
    )
}