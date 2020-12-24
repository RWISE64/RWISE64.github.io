import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import linkParams from "./links";

export default function SidebarNavigation() {
    // TODO Check whether this is necessary in the sidebar
    let currentLink = window.location.pathname.split('/')[1];
    // Probably not good practice, but triggers this to rerender on url switch
    useLocation();

    const links = linkParams.map(link => {
        const active = (link.href === currentLink) ? "sidebar-link-active" : "";
        return (
            <Link
                className={"sidebar-link " + active}
                key={link.name}
                to={"/" + link.href}
            >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.name}</span>
            </Link>
        );
    });

    return(
        <nav className={"sidebar-nav"}>
            {links}
        </nav>
    );
}