import React from "react";
import GenericArticle from "./article/genericArticle";

export default function About() {
    return (
        <GenericArticle
            markdownName={"about.md"}
            articleName={"About"}
        />
    );
}