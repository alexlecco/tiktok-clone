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
        src="https://v16m.tiktokcdn.com/6ee1fdf5c225b63a28cc0e4efd1c449e/5f5e3fb1/video/tos/useast2a/tos-useast2a-ve-0068c003/4a3ec7b62604414799fd02bc85de3ee4/?a=1233\u0026br=2000\u0026bt=1000\u0026cr=0\u0026cs=0\u0026dr=0\u0026ds=3\u0026er=\u0026l=202009130949230101901861420B03736D\u0026lr=tiktok_m\u0026mime_type=video_mp4\u0026qs=0\u0026rc=MztwZ2lyNjRvdjMzZjczM0ApZmhoNDs6ZGU5Nzg5NGRmNWdxaF5mNGEuL2VfLS02MTZzc18vMmFiMi1gYS4tMjVeMjE6Yw%3D%3D\u0026vl=\u0026vr="
      ></video>

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
