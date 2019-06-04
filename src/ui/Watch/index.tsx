import React, { Component } from "react";

// import { Video } from "../../components/Video";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos";
// import VideoPreview from "../../components/VideoPreview";

export class Watch extends Component {
  render() {
    return (
      <RelatedVideos />
      // {/* <VideoPreview horizontal={true} />
      // <VideoPreview /> */}
    );
  }
}
