import React from "react";

import ArticleContent from "./articleContent";
import "./genericPost.css";

export default function GenericPost(props) {
    return (
        <article className={"generic-post"}>
            <div className={"generic-post-header"}>
                <h1 className={"generic-post-title"}>{props.postName}</h1>
                <span className={"generic-post-date"}>{props.date}</span>
            </div>
            <div className={"generic-post-description"}>{props.description}</div>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}