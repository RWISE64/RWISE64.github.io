import React from "react";
import ReactPlayer from 'react-player'

import "./genericPost.css";
import "./musicPerformance.css";

export default function MusicPerformance(props) {
    return (
        <article className={"generic-post"}>
            <div className={"generic-post-header"}>
                <h1 className={"generic-post-title"}>{props.articleName}</h1>
                <span className={"generic-post-date"}>{props.date}</span>
            </div>
            <ReactPlayer url='https://iastate.box.com/s/pk5768xmniv0sf2oy3b16ro6s96kmojn' />
            <div className={"generic-post-description"}>{props.description}</div>
            {/* <ArticleContent markdownName={props.markdownName} /> */}
        </article>
    )
}