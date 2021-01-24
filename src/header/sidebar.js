import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.css";
import linkParams from "./links";

class SidebarNavigation extends Component {
    render() {
        const closed = (this.props.sidebarOpen) ? "" : " closed";

        return (
            <div className={"sidebar"}>
                <nav className={"sidebar-nav" + closed}>
                    <SidebarLinks />
                </nav>
            </div>
        );
    }
}

function SidebarLinks() {
    function getCurrentLink() {
        return window.location.href.split('/')[4];
    }

    const [currentLink, setCurrentLink] = useState(getCurrentLink());

    const links = linkParams.map(link => {
        const active = (link.href === currentLink) ? "sidebar-link-active" : "";
        return (
            <Link
                className={"sidebar-link " + active}
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
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.name}</span>
            </Link>
        );
    });

    return (
        <>
            {links}
        </>
    );

}

export default SidebarNavigation;