import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GenericArticle from "./article/genericArticle";
import "./blog.css";

function BlogArticle(path, markdownName, articleName, icon = "file-alt", description = "No description.") {
    return {
        path: path,
        markdownName: markdownName,
        articleName: articleName,
        icon: icon,
        description: description,
    }
}

const blogArticles = [
    BlogArticle("test1", "blog.md", "Blog 1", "info-circle", "A quick overview of the purpose of this blog."),
    BlogArticle("test2", "blog.md", "Blog 2"),
    BlogArticle("test3", "blog.md", "Blog 3"),
];

export default function Blog() {
    let { path, url } = useRouteMatch();

    let articleRoutes = [];
    let articleLinks = [];
    blogArticles.forEach(article => {
        articleRoutes.push(
            <Route path={`${path}/${article.path}`}>
                <GenericArticle
                    markdownName={article.markdownName}
                    articleName={article.articleName}
                />
            </Route>
        );
        articleLinks.push(
            <Link
                className={"blog-link"}
                to={`${url}/${article.path}`}
            >
                <div className={"blog-link-icon"}>
                    <FontAwesomeIcon icon={article.icon} />
                </div>
                <div>
                    <h1 className={"blog-link-header"}>{article.articleName}</h1>
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