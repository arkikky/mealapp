import React from "react";

const YouTubeEmbed = ({
  videoTitle = "Beef and Mustard Pie - Youtube",
  videoUrl = "https://www.youtube.com/watch?v=nMyBC9staMU",
}) => {
  return (
    <>
      <iframe
        className="object-cover object-center aspect-video h-full w-full"
        src={`${videoUrl}`}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        allowFullScreen
      />
    </>
  );
};
export default YouTubeEmbed;
