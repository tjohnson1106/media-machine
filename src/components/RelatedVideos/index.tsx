import React from "react";

import VideoPreview from "../VideoPreview";
import { NextUpVideo } from "../RelatedVideos/NextUpVideo";
import "./RelatedVideos.scss";

export function RelatedVideos() {
  return (
    <div className="related-videos">
      <NextUpVideo />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
    </div>
  );
}
