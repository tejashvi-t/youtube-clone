import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const GOOGLE_API_KEY = "AIzaSyBph4XWppDEdaWe2LS1PADR8bCc0sKkwOk";
const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=+ ${GOOGLE_API_KEY}`;

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
      console.log(jsonData?.items);
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
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
