import React from "react";
import { Checkbox, Divider } from "semantic-ui-react";

import VideoPreview from "../../VideoPreview";
import "./NextUpVideo.scss";

export function NextUpVideo() {
  return (
    <>
      <div className="next-up-container">
        <h4>Up next</h4>
        <div className="next-up-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VideoPreview horizontal={true} />
      <Divider />
    </>
  );
}
