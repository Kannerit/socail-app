import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import './Home.css'

const Home = () => {

    const [posts, setPosts] = useState([])

    const getLatestPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/latest").then((req) => {

            setPosts(req.data);

        })
            .catch((error) => {
                console.error(error);
            });

    }

    const getNextPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at
        })
        .then((req) => {
            setPosts(posts.concat(req.data));

        })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        getLatestPosts();
    }, [])

    return (
        <div className="home">
            <div className="postList">
                {posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })}
                <button className="btn loadMore" onClick={getNextPosts}>Load more</button>
            </div>
        </div>
    )
}

export default Home;