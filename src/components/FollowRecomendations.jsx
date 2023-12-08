import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FollowRecommendations.css";

const FollowRecommendations = (props) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")

      .then((res) => {
        setRecommendations(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  const follow = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow")
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="MainContainer">
         <h2>Recommendations</h2>
      <div className="Recommendations">
        {recommendations.map((recommendation) => {
          return (
            <div key={recommendation.id}>
              <img src={recommendation.avatar_url} className="AvatarImg" />
              <h3>{recommendation.username}</h3>
              <button className="follow-btn" onClick={()=> follow()}>Follow</button>
            </div>
        
          );
        })}
      </div>
    </div>
  );
};

export default FollowRecommendations;
