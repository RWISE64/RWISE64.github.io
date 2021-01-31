import React from "react";

import ArticleContent from "./articleContent";
import "./genericPost.css";

export default function GenericPost(props) {
    const post = props.post;
    return (
        <article className={"generic-post"}>
            <div className={"generic-post-header"}>
                <h1 className={"generic-post-title"}>{post.postName}</h1>
                <span className={"generic-post-date"}>{post.postDate}</span>
            </div>
            <div className={"generic-post-description"}>{post.description}</div>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}