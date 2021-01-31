import React from "react";
import GenericPost from "./templates/genericPost";
import { GenericPostInformation } from "./templates/postList";

export default function About() {
    const postInformation = new GenericPostInformation("", "shoutsToTheVoid.md", "About", "");

    return (
        <GenericPost
            markdownName={"about.md"}
            post={postInformation}
        />
    );
}