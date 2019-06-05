import React, { Component } from "react";
import { Image, Button, Divider } from "semantic-ui-react";

import "./VideoInfoBox.scss";
import { BooleanLiteral } from "@babel/types";

class VideoInfoBox extends Component<{}, { collapsed: boolean }> {
  state = {
    collapsed: true
  };

  onToggleCollapseButtonClick = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  };

  render() {
    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show more";
    if (!this.state.collapsed) {
      descriptionTextClass = "expanded";
      buttonTitle = "Show less";
    }
    return (
      <div>
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
            <div className={descriptionTextClass}>
              {/* {descriptionParagraphs} */}
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
              <p>Paragraph 3</p>
              <p>Paragraph 4</p>
              <p>Paragraph 5</p>
            </div>
            <Button compact onClick={this.onToggleCollapseButtonClick}>
              {buttonTitle}
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

export default VideoInfoBox;
