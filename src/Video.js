import React, { useState, useRef } from "react";
import "./Video.css";

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
        src="https://v77.tiktokcdn.com/664b7435e9ac6d1d49fcd9decb0e95b2/5f5e0f44/video/tos/useast2a/tos-useast2a-ve-0068c002/2db3e0d2e6c248459b16addda9a127c9/?a=1233\u0026br=3482\u0026bt=1741\u0026cr=0\u0026cs=0\u0026cv=1\u0026dr=0\u0026ds=3\u0026er=\u0026l=202009130623250101902180930B00C950\u0026lr=tiktok_m\u0026mime_type=video_mp4\u0026qs=0\u0026rc=amRlazdveHllczMzNTczM0ApPDtlO2UzN2VoN2RkO2g3NmcycGJwY25mb2pfLS1iMTZzc2MzXjU2NjFjY2AuLV8yNi06Yw%3D%3D\u0026&vl=&vr="
      ></video>
    </div>
  );
}

export default Video;
