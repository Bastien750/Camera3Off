import React from "react";
import { VideoData } from "./VideoData";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <h1>Vidéos</h1>
      <div className="video-contain">
        {VideoData.map((video, index) => {
          return (
            <div key={index} className="each-video">
              <h2>{video.title}</h2>
              <iframe
                width="426"
                height="240"
                src={"https://www.youtube.com/embed/" + video.url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Video;
