import React from "react";
import { Icon, Progress } from "semantic-ui-react";

import "./Rating.scss";

interface Props {
  likeCount?: number;
  dislikeCount?: number;
}

export function Rating(props: Props) {
  let progress = null;

  if (props.likeCount && props.dislikeCount) {
    const percent =
      100 * (props.likeCount / (props.likeCount + props.dislikeCount));
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }
  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs up outline" />
        <span>{props.likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs down outline" />
        <span>{props.dislikeCount}</span>
      </div>
      {progress}
    </div>
  );
}
