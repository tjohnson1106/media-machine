import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";

import "./VideoInfoBox.scss";

class VideoInfoBox extends Component {
  render() {
    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">Channel name</div>
          <div className="video-publication-date">June 1, 2019</div>
        </div>
        <Button color="youtube">91.5k Subscribe</Button>

        <div className="video-description">
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
          <p>Paragraph 4</p>
          <p>Paragraph 5</p>
          <Button compact>Show More</Button>
        </div>
      </div>
    );
  }
}

export default VideoInfoBox;
