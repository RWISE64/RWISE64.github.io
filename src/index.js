import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { 
    faUser,
    faPen,
    faMusic,
    faKeyboard, 
    faBars, 
    faInfoCircle, 
    faFileAlt,
    faCog,
    faArrowAltCircleLeft,
    faCalendarCheck,
    faMicrophoneAlt,
    faHouseDamage,
    faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";

import App from "./app";
import "./index.css";

// Globally import FontAwesome icons
library.add(
    fab,
    faUser,
    faPen,
    faMusic, 
    faKeyboard, 
    faBars, 
    faInfoCircle, 
    faFileAlt,
    faCog,
    faArrowAltCircleLeft,
    faCalendarCheck,
    faMicrophoneAlt,
    faHouseDamage,
    faGlassCheers,
);

/*
TODO
add css modules to avoid unnecessary shenanigans
convert to typescript so you can stop being a disorganized mollusk
*/
ReactDOM.render(
    <App />,
    document.getElementById("root")
);