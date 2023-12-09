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

  const followRecommendation = (id) => {
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


  return (
    <div className="MainContainer">
         <h2 className="RecHeader">Recommendations</h2>
      <div className="Recommendations">
        {recommendations.map((recommendation) => {
          return (
            <div className="Recommendation" key={recommendation.id}>
              <img src={recommendation.avatar_url} className="AvatarImg" />
              <h3>{recommendation.username}</h3>
              <button className="follow-rec-btn" onClick={()=> followRecommendation(recommendation.id)} >Follow</button>
            </div>
        
          );
        })}
        
      </div>
      
    </div>
  );
};

export default FollowRecommendations;
