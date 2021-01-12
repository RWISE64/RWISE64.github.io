import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./loadingIcon.css";

export default function ArticleContent(props) {
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        // My less than elegant way of extracting my markdown files
        async function fetchMarkdown() {
            // Allegedly need to restrict dynamic imports to a known path to work with webpack
            const markdownFile = await import("../content/" + props.markdownName);
            const res = await fetch(markdownFile.default);
            const text = await res.text();
            return text;
        }
        // This is terrible in every way, shape, and form
        // I realized the delay is too short for my loading icon to be seen, so I added a mandatory load time...
        // Pretty terrible. I might be able to cut out this markdown fetch eventually, but until then I want people to see my pretty loader.
        setTimeout(() => fetchMarkdown().then(res => setMarkdown(res)), 500);
    });

    return (
        <div id={"content"}>
            {
                (markdown) ? 
                <ReactMarkdown source={markdown} /> :
                <FontAwesomeIcon 
                    icon={"cog"}
                    className={"loading-icon"}
                />
            }
        </div>
    );
}

