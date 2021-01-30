import React from "react";
import GenericPost from "./templates/genericPost";

export default function About() {
    return (
        <GenericPost
            markdownName={"about.md"}
            postName={"About"}
        />
    );
}