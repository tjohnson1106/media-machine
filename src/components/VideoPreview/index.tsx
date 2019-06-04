import React, { Component } from "react";
import { Image } from "semantic-ui-react";

import "./VideoPreview.scss";
import { StringLiteral } from "@babel/types";

interface Props {
  horizontal?: boolean | string;
}

class VideoPreview extends Component<Props> {
  state = {};
  render() {
    const horizontal = this.props.horizontal ? "horizontal" : null;
    return (
      <div className={["video-preview", horizontal].join("")}>
        <div className="image-container">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="time-label">
            <span>05:24</span>
          </div>
        </div>

        <div className="video-info">
          <div className="semi-bold show-max-two-lines">Video title</div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">Channel title</div>
            <div>
              <span>2.1M views • 2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPreview;
