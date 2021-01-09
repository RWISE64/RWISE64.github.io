import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import GenericArticle from "./article/genericArticle";
import "./blog.css";

function BlogArticle(path, markdownName, articleName) {
    return {
        path: path,
        markdownName: markdownName,
        articleName: articleName
    }
}

const blogArticles = [
    BlogArticle("test1", "blog.md", "Blog 1"),
    BlogArticle("test2", "blog.md", "Blog 2"),
    BlogArticle("test3", "blog.md", "Blog 3")
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
                {article.articleName}
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