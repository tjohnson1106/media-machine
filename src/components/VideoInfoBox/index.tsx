import React, { Component, ReactNode } from "react";
import { Image, Button, Divider } from "semantic-ui-react";

import "./VideoInfoBox.scss";

interface InfoType {
  collapsed?: boolean;
  className?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    string;
}

class VideoInfoBox extends Component<{}, InfoType> {
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
    // solve className type issue
    // let className;

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

          <Button className="subscribe" color="youtube">
            91.5k Subscribe
          </Button>

          <div className="video-description">
            <div>
              {/* TODO */}
              {/* {descriptionParagraphs} */}
              .video-description-
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
