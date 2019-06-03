import React from "react";
import { Divider } from "semantic-ui-react";

// import {VideoGridHeader} from "./VideoGridHeader";
import VideoPreview from "../VideoPreview";
import "VideoGrid.scss";
import { VideoGridHeader } from "./VideoGridHeader";

export function VideoGrid(props: { hideDivider?: boolean; title?: string }) {
  const divider = props.hideDivider ? null : <Divider />;

  return (
    <>
      <VideoGridHeader title="Trending" />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </>
  );
}
