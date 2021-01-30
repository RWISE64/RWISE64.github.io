import React from "react";
import GenericPost from "./article/genericPost";

export default function About() {
    return (
        <GenericPost
            markdownName={"about.md"}
            articleName={"About"}
        />
    );
}