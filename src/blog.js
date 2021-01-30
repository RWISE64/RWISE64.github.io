import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GenericPost from "./templates/genericPost";
import PostList from "./templates/postList";

function BlogPost(path, markdownName, postName, date, icon = "file-alt", description = "") {
    return {
        path: path,
        markdownName: markdownName,
        postName: postName,
        date: date,
        icon: icon,
        description: description,
    }
}

const blogPosts = [
    BlogPost("shouts-to-the-void", "shoutsToTheVoid.md", "Shouts to the Void", "1/9/21", "info-circle", "A quick overview of the purpose of this blog."),
    BlogPost("new-year-new-ambitions", "newYearNewAmbitions.md", "New Year, New Ambitions", "1/13/21", "calendar-check", "A reflection on 2020 and my overambitious goals for 2021."),
];

export default function Blog() {
    const BlogPostList = PostList(GenericPost, "Blog", blogPosts);

    return (
        <BlogPostList
        />
    );
}