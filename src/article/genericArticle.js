import React from "react";

import ArticleContent from "./articleContent";
import "./genericArticle.css";

export default function GenericArticle(props) {
    return (
        <article className={"generic-article"}>
            <div className={"generic-article-header"}>
                <h1 className={"generic-article-title"}>{props.articleName}</h1>
                <span className={"generic-article-date"}>{props.date}</span>
            </div>
            <div className={"generic-article-description"}>{props.description}</div>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}