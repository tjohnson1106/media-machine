import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";

import { Rating } from "../Rating";
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
        <div className="video-actions">
          <Rating likeCount={1000} dislikeCount={100} />

          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>

          <Button basic icon>
            <Icon name="add circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
