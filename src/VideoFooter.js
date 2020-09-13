import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFoote__text">
        <h3>@alexlecco</h3>
        <p>This is some description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Hold on - Lu2vyk ft Madison Gold</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
