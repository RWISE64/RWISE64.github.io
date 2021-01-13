import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GenericArticle from "./article/genericArticle";
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
];

export default function Blog() {
    let { path, url } = useRouteMatch();

    let articleRoutes = [];
    let articleLinks = [];
    blogArticles.forEach(article => {
        articleRoutes.push(
            <Route 
                path={`${path}/${article.path}`}
                key={article.path}
            >
                <div>
                    <Link
                        className={"blog-back-button"}
                        to={`${url}`}
                    >
                        <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                        Back to Blog
                    </Link>
                    <GenericArticle
                        markdownName={article.markdownName}
                        articleName={article.articleName}
                        date={article.date}
                        description={article.description}
                    />
                </div>
                <Link
                    className={"blog-back-button"}
                    to={`${url}`}
                >
                    <FontAwesomeIcon icon={"arrow-alt-circle-left"} />
                    Back to Blog
                </Link>
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