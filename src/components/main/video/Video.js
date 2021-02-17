import React, { useState } from "react";
import { VideoData } from "./VideoData";
import "./Video.css";

function Video() {
  const [limit, setLimit] = useState(2);

  return (
    <div className="video">
      <h1 id="videos">Vidéos</h1>
      <div className="video-contain">
        {VideoData.map((video, index) => {
          if (index < limit) {
            return (
              <div key={index} className="each-video">
                <h2>{video.title}</h2>
                <iframe
                  src={"https://www.youtube.com/embed/" + video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                  title={video.title}
                ></iframe>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
      <p
        onClick={() => setLimit(limit + 2)}
        className="view-more"
        style={{ display: "none" }} // Delete the style when we get more than 2 vidéos
      >
        Voir +
      </p>
    </div>
  );
}
export default Video;
