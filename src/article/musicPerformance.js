import React from "react";
import ReactPlayer from 'react-player/vimeo'

import ArticleContent from "./articleContent";
import "./genericPost.css";
import "./musicPerformance.css";

export default function MusicPerformance(props) {
    return (
        <article className={"generic-post"}>
            <div className={"player-wrapper"}>
                <ReactPlayer 
                    className={"react-player"}
                    url={props.url}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <div className={"generic-post-header"}>
                <h1 className={"generic-post-title"}>{props.songName}</h1>
                <span className={"generic-post-date"}>{props.date}</span>
            </div>
            <div className={"generic-post-description"}>{props.description}</div>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}