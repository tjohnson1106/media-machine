import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";

import "./VideoMetadata.scss";

interface Props {
  className?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    string;
  viewCount?: number | string;
}

export function VideoMetadata(props: Props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";
  return (
    <div className="video-metadata" {...props.className}>
      <h3>Video title</h3>

      <div className="video-stats">
        <span>{viewCount} views</span>
        <div>{/* TODO */}</div>
      </div>
      <Divider />
    </div>
  );
}
