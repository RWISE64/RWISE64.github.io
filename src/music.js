import MusicPost from "./templates/musicPost";
import PostList from "./templates/postList";
import { GenericPostInformation } from "./templates/postList";

const MusicPostInformation = function(path, markdownName, postName, postDate, videoUrl, icon = "music", description = "") {
    let postInformation = new GenericPostInformation(path, markdownName, postName, postDate, icon, description);
    postInformation.videoUrl = videoUrl;
    // TODO Add recording date
    return postInformation;
}

{/* <MusicPerformance
songName={"Lonely Town"}
date={"1/29/21"}
url={"https://vimeo.com/506362883"}
markdownName={"music/lonelyTown.md"}
/> */}

const musicPosts = [
    new MusicPostInformation("lonely-town", "lonelyTown.md", "Lonely Town", "1/29/21", "https://vimeo.com/506362883", "music", "Lonely Town from Bernstein's On the Town"),
];

export default function Music() {
    const MusicPostList = PostList(MusicPost, "Music", musicPosts);

    return (
        <MusicPostList
        />
    );
}