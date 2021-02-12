import React from "react";
import ArticleContent from "./templates/articleContent";

import profilePhoto from "./content/images/god_ussop.jpg"
import "./templates/genericPost.css"
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function About() {
    return (
        <article className={"about"}>
            <div className={"about-header"}>
                <img className={"about-photo"} alt={"Robert Wise"} src={profilePhoto} />
                <div className={"about-header-info"}>
                    <div className={"about-header-title"}>Robert Wise</div>
                    <div className={"about-header-subtitle"}>Fledgling developer, classical singer, nap enthusiast</div>
                    <div className={"about-media"}>
                        <a 
                            href={"https://github.com/RWISE64"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <FontAwesomeIcon icon={['fab', 'github-square']} />
                            <span>RWISE64</span>
                        </a>
                        <a 
                            href={"https://www.linkedin.com/in/robert-wise-65b3b6197/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            <span>robert-wise-65b3b6197</span>
                        </a>
                    </div>
                </div>
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