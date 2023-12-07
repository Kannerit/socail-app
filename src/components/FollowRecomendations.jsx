import React, { useState, useEffect } from "react";
import axios from "axios";


const FollowRecommendations = (props) => {
  const [recommendations, setRecommendations] = useState([]);
  // // const [doesUserFollow, setDoesUserFollow] = useState(
  // //   // props.post.user.filter((follow) => follow.username === props.user?.username)
  // //   //   .length !== 0
  // );

  const getRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")

      .then((res) => {
        setRecommendations(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRecommendations()
  }, []);



  const follow = (id, isFollowed) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow" )
      

      // I used the logic from the "like part"
      // (isFollowed ? "unfollow" : "follow"),
      // {
      //   user: id,
      // }
      // )

      .then((res) => {
        console.log(res);
        // setDoesUserFollow(!isFollowed);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <div>
      <ul>
          {recommendations.map(user => (
            <li key={user.id}>
              <div>{user.id}</div>
              <button onClick={()=> follow()}>Follow</button>
            </li>
          ))}
       </ul>
    </div>
  );
};

export default FollowRecommendations;
