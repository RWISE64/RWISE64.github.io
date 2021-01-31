import MusicPost from "./templates/musicPost";
import PostList from "./templates/postList";
import { GenericPostInformation } from "./templates/postList";

const MusicPostInformation = function(path, markdownName, postName, postDate, videoUrl, description = "", icon = "music") {
    let postInformation = new GenericPostInformation(path, markdownName, postName, postDate, icon, description);
    postInformation.videoUrl = videoUrl;
    return postInformation;
}

const musicPosts = [
    new MusicPostInformation("lonely-town", "lonelyTown.md", "Lonely Town", "1/30/21", "https://vimeo.com/506362883", "Leonard Bernstein", "microphone-alt"),
];

export default function Music() {
    const MusicPostList = PostList(MusicPost, "Music", musicPosts);

    return (
        <MusicPostList
        />
    );
}