import React, { Component } from "react";

import { Video } from "../../components/Video";
import "./Watch.scss";
import VideoPreview from "../../components/VideoPreview";

export class Watch extends Component {
  render() {
    return (
      <>
        <VideoPreview horizontal={true} />
        <VideoPreview />
      </>
    );
  }
}
