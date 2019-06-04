import React from "react";

import VideoPreview from "../VideoPreview";
import { NextUpVideo } from "../RelatedVideos/NextUpVideo";
import "./RelatedVideos.scss";

export function RelatedVideos(props: {
  className?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    string;
}) {
  return (
    <div className="related-videos" {...props.className}>
      <NextUpVideo />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
      <VideoPreview horizontal={true} />
    </div>
  );
}
