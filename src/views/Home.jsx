import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import "./Home.css";
import AddPost from "../components/AddPost";
import FollowRecommendations from "../components/FollowRecomendations";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getLatestPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/latest")

      .then((req) => {
        setPosts(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getNextPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((req) => {
        setPosts(posts.concat(req.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getPrevPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/newer-then", {
        date: posts[0].created_at,
      })
      .then((req) => {
        setPosts(req.data.concat(posts));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletePost = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/post/delete", {
        post_id: id,
      })
      .then((res) => {
        setPosts(posts.filter((post) => post.id !== res.data.post_id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <div className="home">
      <div className="postList">
        <AddPost getPrevPosts={getPrevPosts} />
        {posts.map((post) => {
          return (
            <Post
              post={post}
              user={props.user}
              key={post.id}
              deletePost={deletePost}
            />
          );
        })}
        <button className="btn loadMore" onClick={getNextPosts}>
          Load more
        </button>
        <FollowRecommendations />
      </div>
    </div>
  );
};

export default Home;
