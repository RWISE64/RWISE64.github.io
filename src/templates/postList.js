import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import PostWrapper from "./postWrapper";
import "./postList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function GenericPostInformation(path, markdownName, postName, postDate, icon = "file-alt", description = "") {
    this.path = path;
    this.markdownName = markdownName;
    this.postName = postName;
    this.postDate = postDate;
    this.icon = icon;
    this.description = description;
}

export default function PostList(PostComponent, pageName, postObjects) {
    let { path, url } = useRouteMatch();

    let postRoutes = [];
    let postLinks = [];
    const WrappedGenericPost = PostWrapper(
        PostComponent,
        url,
        pageName
    );

    postObjects.forEach(post => {
        postRoutes.push(
            <Route
                path={`${path}/${post.path}`}
                key={post.path}
            >
                <WrappedGenericPost
                    markdownName={`${pageName.toLowerCase()}/${post.markdownName}`}
                    post={post}
                />
            </Route>
        );
        postLinks.push(
            <Link
                className={"post-link"}
                to={`${url}/${post.path}`}
                key={post.path}
            >
                <div className={"post-link-icon"}>
                    <FontAwesomeIcon icon={post.icon} />
                </div>
                <div className={"post-link-info"}>
                    <div className={"post-link-header"}>
                        <h1 className={"post-link-title"}>{post.postName}</h1>
                        <span className={"post-link-date"}>{post.postDate}</span>
                    </div>
                    <p className={"post-link-description"}>{post.description}</p>
                </div>
            </Link>
        );
    });

    return function() {
        return (
            <Switch>
                {postRoutes}
                <Route path="/">
                    <div className="post-links">
                        {postLinks}
                    </div>
                </Route>
            </Switch>
        );
    }
}