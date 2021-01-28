import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        render() {
            return (
                <>
                    <Link
                        className={"blog-back-button"}
                        to={`${url}`}
                    >
                        <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                        Back to { name }
                    </Link>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}