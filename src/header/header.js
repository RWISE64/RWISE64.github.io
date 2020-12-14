import React from "react";
import { Link } from "react-router-dom";
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
        <span className={"header-logo"}>
            <span className={"header-title"}>Robert Wise</span>
            <span className={"header-subtitle"}>Fledgling Developer</span>
        </span>
    );
}

const linkParams = [
    { name: "Home", href: "/" },
    { name: "Stuff", href: "/stuff" },
    { name: "Contact", href: "/contact" },
];

function HeaderNavigation() {
    const links = linkParams.map(link => {
        return (
            <Link
                className={"header-link"}
                key={link.name}
                to={link.href}
            >
                {link.name}
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