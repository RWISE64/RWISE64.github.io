import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./postWrapper.css";

function setBottomButtonVisibility(visible) {
    const bottomButton = document.getElementById("bottom-back-button");
    bottomButton.style.display = (visible) ? "block" : "none";
}

function updateBottomButtonVisibility() {
    const wrapperContent = document.getElementsByClassName("post-wrapper")[0];
    let wrapperContentHeight = wrapperContent.getBoundingClientRect().height;
    let contentAreaHeight = wrapperContent.parentElement.parentElement.getBoundingClientRect().height;
    setBottomButtonVisibility(wrapperContentHeight > contentAreaHeight);
}

/**
 * Takes a post (e.g. a blog post) and wraps it with back buttons above
 * and sometimes below
 * @param {React.Component} WrappedComponent component to be wrapped
 * @param {string} url url to return to when clicked
 * @param {string} name name of the page to be returned t
 * @return {React.Component} new component where WrappedComponent is wrapped by buttons
 */
export default function postWrapper(WrappedComponent, url, name) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            updateBottomButtonVisibility();
            // Shocking, another terrible idea
            // Just adds the bottom button after the text should be loaded
            // Need to replace this with promises/callbacks eventually
            setTimeout(() => updateBottomButtonVisibility(), 550);
            window.addEventListener("resize", () => {
                updateBottomButtonVisibility();
            });
        }

        render() {
            return (
                <div class="post-wrapper">
                    <Link
                        className={"back-button"}
                        to={`${url}`}
                    >
                        <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                        Back to {name}
                    </Link>
                    <WrappedComponent {...this.props} />
                    <Link
                        className={"back-button"}
                        id={"bottom-back-button"}
                        to={`${url}`}
                    >
                        <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                        Back to {name}
                    </Link>
                </div>
            );
        }
    }
}