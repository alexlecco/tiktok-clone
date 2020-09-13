import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v77.tiktokcdn.com/4bfd3debda2a6adae78af3001782a53d/5f5e43bf/video/tos/useast2a/tos-useast2a-ve-0068c004/31d62eb70a0a4adeb9eeefdd17f8a1b2/?a=1233\u0026br=4170\u0026bt=2085\u0026cr=0\u0026cs=0\u0026dr=0\u0026ds=3\u0026er=\u0026l=202009131007140101890720322C039690\u0026lr=tiktok_m\u0026mime_type=video_mp4\u0026qs=0\u0026rc=M2xoNHZucjhsdDMzNjczM0ApODU8OzY7Ojs4Nzo7ODY8O2dsM2hgMi5lZmNfLS0vMTZzczAzY2JeNGBfMV5gNDBhY2E6Yw%3D%3D\u0026vl=\u0026vr="
      ></video>

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
