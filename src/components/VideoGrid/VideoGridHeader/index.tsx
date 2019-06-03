import React from "react";

import "VideoGridHeader.scss";

export function VideoGridHeader(props: { title: React.ReactNode }) {
  return (
    <div className="video-grid-header">
      <span className="title">{props.title}</span>
    </div>
  );
}
