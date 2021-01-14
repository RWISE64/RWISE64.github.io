import React, { useEffect } from "react";

import ArticleContent from "./articleContent";
import "./genericArticle.css";

function setBottomButtonVisibility(visible) {
    const bottomButton = document.getElementById("blog-bottom-back-button");
    bottomButton.style.display = (visible) ? "block" : "none";
}

function updateBottomButtonVisibility() {
    const topContent = document.getElementById("blog-top-content");
    let topContentHeight = topContent.getBoundingClientRect().height;
    let contentAreaHeight = topContent.parentElement.parentElement.getBoundingClientRect().height;
    setBottomButtonVisibility(topContentHeight > contentAreaHeight);
}

export default function GenericArticle(props) {
    useEffect(() => {
        updateBottomButtonVisibility();
        // Shocking, another terrible idea
        // Couldn't effectively get an event to trigger following the fake load, so
        // the bottom button wasn't being conditionally added until the window was 
        // resized.
        // Again, terrible. Hopefully this'll be removed when I deal with the markdown loading
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