import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg p-2 m-2  rounded-lg w-60">
      <img alt="thumnail" src={thumbnails?.high?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );

  // return <div>video VideoCard</div>;
};

export default VideoCard;
