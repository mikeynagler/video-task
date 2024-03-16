import { useContext, useEffect, useState } from "react";
import { videoContext } from "../../context/videoContext";
import Controls from "../controls/Controls";
import vid from "../../assets/horiz.mp4";

import "./Display.css";

export const Display = () => {
  const { video, endTime, startTime, isOn } = useContext(videoContext);

  useEffect(() => {
    if (video?.current) {
      video.current.addEventListener("timeupdate", checkBoundaries);
    }

    return () => {
      if (video?.current) {
        video.current?.removeEventListener("timeupdate", checkBoundaries);
      }
    };
  }, [video?.current, endTime, startTime]);

  const checkBoundaries = () => {
    if (!isOn) {
      return;
    }

    if (video?.current && video.current.currentTime > endTime) {
      video.current.currentTime = endTime;
      video.current.pause();
    }
  };

  return (
    <div className="Display" data-loading={!isOn}>
      <video ref={video} width="100%" height="100%" preload="auto">
        <source
          src={
            // "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            vid
          }
          type="video/mp4"
        />
      </video>
      <Controls />
    </div>
  );
};
