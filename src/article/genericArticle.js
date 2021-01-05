import React from "react";
import ArticleContent from "./articleContent";

export default function GenericArticle(props) {
    return (
        <article className={"generic-article"}>
            <h2>{props.articleName}</h2>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}