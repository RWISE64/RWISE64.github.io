import React, { useEffect } from "react";

import ArticleContent from "./articleContent";
import "./genericArticle.css";

function setBottomButtonVisibility(visible) {
    const bottomButton = document.getElementById("blog-bottom-back-button");
    bottomButton.style.display = (visible) ? "block" : "none";
}

function updateBottomButtonVisibility() {
    const topContent = document.getElementById("blog-top-content");
    // TODO Separate buttons and generic article... this check shouldn't be called on About
    if (topContent !==  null) {
        let topContentHeight = topContent.getBoundingClientRect().height;
        let contentAreaHeight = topContent.parentElement.parentElement.getBoundingClientRect().height;
        setBottomButtonVisibility(topContentHeight > contentAreaHeight);
    }
}

export default function GenericArticle(props) {
    useEffect(() => {
        updateBottomButtonVisibility();
        // Shocking, another terrible idea
        // Just adds the bottom button after the text should be loaded
        // Need to replace this with promises/callbacks eventually
        setTimeout(() => updateBottomButtonVisibility(), 550);
        window.addEventListener("resize", () => {
            updateBottomButtonVisibility();
        });
    }, []);

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