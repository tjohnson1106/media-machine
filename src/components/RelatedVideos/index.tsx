import React from "react";

import VideoPreview from "../VideoPreview";
import "./RelatedVideos.scss";

export function RelatedVideos() {
  return (
    <div className="related-videos">
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
    </div>
  );
}
