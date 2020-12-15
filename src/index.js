import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faUser, faPen, faMusic, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import App from "./app";
import "./index.css";

// Globally import FontAwesome icons
library.add(faCheckSquare, faUser, faPen, faMusic, faKeyboard);

/*
TODO
add css modules to avoid unnecessary shenanigans
convert to typescript so you can stop being a disorganized mollusk
*/
ReactDOM.render(
    <App />,
    document.getElementById("root")
);