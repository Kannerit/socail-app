import { useState } from "react";
import "./Post.css";
import axios from "axios";


const Post = (props) => {
  const [likesCount, setLikesCount] = useState(props.post.likes.length);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [doesUserLike, setdoesUserLike] = useState(
    props.post.likes.filter((like) => like.username === props.user?.username)
      .length !== 0
  );

  const [doesUserFollow, setdoesUserFollow] = useState(true);

  const follow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: id
      })
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const unfollow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/disfollow", {
        leader_id: id,
      })
      .then((res) => {
        console.log(res);
        setdoesUserFollow(false);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const handleFollowClick = () => {
    if (doesUserFollow) {
      unfollow(props.user.id);
    } else {
      follow(props.user.id);
      setdoesUserFollow(true)
    }
  };

  const likePost = (id, isLiked) => {
    axios
      .post(
        "https://akademia108.pl/api/social-app/post/" +
          (isLiked ? "dislike" : "like"),
        {
          post_id: id,
        }
      )
      .then(() => {
        setLikesCount(likesCount + (isLiked ? -1 : 1));
        setdoesUserLike(!isLiked);
      });
  };

  return (
    <div className="post">
      <div className="avatar">
        <img src={props.post.user.avatar_url} alt={props.post.user.username} />
      </div>
      <div className="postData">
        <div className="postMeta">
          <div className="author">{props.post.user.username}</div>
          <div className="date">{props.post.created_at.substring(0, 10)}</div>
          {props.user && (
            <button
              className="btn"
              onClick={() => handleFollowClick()}
            >
              {doesUserFollow ? "Unfollow" : "Follow"}
            </button>
          )}
          <div className="postContent">{props.post.content}</div>
          <div className="likes">
            {props.user && (
              <button
                className="btn"
                onClick={() => likePost(props.post.id, doesUserLike)}
              >
                {doesUserLike ? "Dislike" : "Like"}
              </button>
            )}
            {likesCount}
          </div>
          {props.user?.username === props.post.user.username && (
            <button className="btn" onClick={() => setDeleteModalVisible(true)}>
              Delete
            </button>
          )}

          {deleteModalVisible && (
            <div className="deleteConfirmation">
              <h3>Are you sure you want to delete post?</h3>
              <button
                className="btn yes"
                onClick={() => props.deletePost(props.post.id)}
              >
                Yes
              </button>
              <button
                className="btn no"
                onClick={() => setDeleteModalVisible(false)}
              >
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
