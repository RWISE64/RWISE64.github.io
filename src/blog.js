import GenericPost from "./templates/genericPost";
import PostList from "./templates/postList";
import { GenericPostInformation } from "./templates/postList";

const blogPosts = [
    new GenericPostInformation("shouts-to-the-void", "shoutsToTheVoid.md", "Shouts to the Void", "1/9/21", "info-circle", "A quick overview of the purpose of this blog."),
    new GenericPostInformation("new-year-new-ambitions", "newYearNewAmbitions.md", "New Year, New Ambitions", "1/13/21", "calendar-check", "A reflection on 2020 and my overambitious goals for 2021."),
    new GenericPostInformation("broken-window-theory", "brokenWindowTheory.md", "Broken Window Theory", "1/31/21", "house-damage", "Diving into Broken Window Theory, in software and in general."),
];

export default function Blog() {
    const BlogPostList = PostList(GenericPost, "Blog", blogPosts);

    return (
        <BlogPostList
        />
    );
}