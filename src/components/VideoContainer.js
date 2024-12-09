import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const result = await fetch(YOUTUBE_VIDEO_API);
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const jsonData = await result.json();

      setVideos(jsonData?.items);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div
      className="flex flex-wrap gap-2
    "
    >
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
