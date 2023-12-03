import React, { useRef, useEffect } from "react";

export const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.muted = true;
      videoElement.loop = true;
      videoElement.play();
    }
  }, []);

  return (
    <video ref={videoRef}>
      <source
        src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/646f088ca1a027c73d73b145_video%20background%20-transcode.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};
