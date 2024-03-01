import React, { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const getVideos = async () => {
    console.log(YT_VIDEOS_API);
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
            <VideoCard info={video} />
        ))}
    </div>
  );
};

export default VideoContainer;
