import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GenericArticle from "./article/genericArticle";
import postWrapper from "./article/postWrapper";
import "./blog.css";

function BlogArticle(path, markdownName, articleName, date, icon = "file-alt", description = "") {
    return {
        path: path,
        markdownName: markdownName,
        articleName: articleName,
        date: date,
        icon: icon,
        description: description,
    }
}

const blogArticles = [
    BlogArticle("shouts-to-the-void", "shoutsToTheVoid.md", "Shouts to the Void", "1/9/21", "info-circle", "A quick overview of the purpose of this blog."),
    BlogArticle("new-year-new-ambitions", "newYearNewAmbitions.md", "New Year, New Ambitions", "1/13/21", "calendar-check", "A reflection on 2020 and my overambitious goals for 2021."),
];

export default function Blog() {
    let { path, url } = useRouteMatch();

    let articleRoutes = [];
    let articleLinks = [];
    const WrappedGenericArticle = postWrapper(
        GenericArticle,
        url,
        "Blog"
    );
    
    blogArticles.forEach(article => {
        articleRoutes.push(
            <Route
                path={`${path}/${article.path}`}
                key={article.path}
            >
                <WrappedGenericArticle
                    markdownName={"blog/" + article.markdownName}
                    articleName={article.articleName}
                    date={article.date}
                    description={article.description}
                />
                {/* <Link
                    className={"blog-back-button"}
                    id={"blog-bottom-back-button"}
                    to={`${url}`}
                >
                    <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                    Back to Blog
                </Link> */}
            </Route>
        );
        articleLinks.push(
            <Link
                className={"blog-link"}
                to={`${url}/${article.path}`}
                key={article.path}
            >
                <div className={"blog-link-icon"}>
                    <FontAwesomeIcon icon={article.icon} />
                </div>
                <div className={"blog-link-info"}>
                    <div className={"blog-link-header"}>
                        <h1 className={"blog-link-title"}>{article.articleName}</h1>
                        <span className={"blog-link-date"}>{article.date}</span>
                    </div>
                    <p className={"blog-link-description"}>{article.description}</p>
                </div>
            </Link>
        );
    });




    return (
        <Switch>
            {articleRoutes}
            <Route path="/">
                <div className="blog-links">
                    {articleLinks}
                </div>
            </Route>
        </Switch>
    );
}