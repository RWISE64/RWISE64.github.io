import React from "react";
import ArticleContent from "./templates/articleContent";

import "./templates/genericPost.css"
import "./about.css";

export default function About() {
    return (
        <article className={"about"}>
            <div className={"about-header"}>
                test test
            </div>
            <div className={"about-content"}>
                <div className={"generic-post-header"}>
                    <h1 className={"generic-post-title"}>About</h1>
                </div>
                <ArticleContent markdownName={"about.md"} />
            </div>
        </article>
    );
}