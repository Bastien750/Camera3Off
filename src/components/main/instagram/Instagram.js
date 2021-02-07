import React from "react";
import Feed from "react-instagram-authless-feed";
import "./Instagram.css";

function Instagram() {
  return (
    <div className="instagram-feedback">
      <h1 id="instagram">Instagram</h1>
      <div className="post-container">
        <Feed
          userName="camera3offp"
          className="Feed"
          classNameLoading="Loading"
          limit="9"
        />
      </div>
    </div>
  );
}

export default Instagram;
