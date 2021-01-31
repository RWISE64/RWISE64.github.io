import React from "react";
import ReactPlayer from 'react-player/vimeo'

import ArticleContent from "./articleContent";
import "./genericPost.css";
import "./musicPost.css";

export default function MusicPost(props) {
    const post = props.post
    return (
        <article className={"generic-post"}>
            <div className={"player-wrapper"}>
                <ReactPlayer 
                    className={"react-player"}
                    url={post.videoUrl}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <div className={"generic-post-header"}>
                <h1 className={"generic-post-title"}>{post.postName}</h1>
                <span className={"generic-post-date"}>{post.postDate}</span>
            </div>
            <div className={"generic-post-description"}>{post.description}</div>
            <ArticleContent markdownName={props.markdownName} />
        </article>
    )
}