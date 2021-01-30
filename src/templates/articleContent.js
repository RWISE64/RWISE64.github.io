import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import "./articleContent.css";

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
        fetchMarkdown().then(res => setMarkdown(res));
    });

    let markdownLoadStyling = (markdown) ? "" : " unloaded";

    return (
        <div className={"article-content" + markdownLoadStyling}>
            <ReactMarkdown source={markdown} />
        </div>
    );
}

