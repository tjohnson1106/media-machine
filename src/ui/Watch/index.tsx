import React, { Component } from "react";

import "./Watch.scss";
import { Video } from "../../components/Video";
import { RelatedVideos } from "../../components/RelatedVideos";
import { VideoMetadata } from "../../components/VideoMetadata";
import VideoInfoBox from "../../components/VideoInfoBox";
import Comments from "../Comments";

export class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="metadata" viewCount={1000} />

        <VideoInfoBox />

        <Comments className="comments" />
        <RelatedVideos className="related-videos" />
      </div>
    );
  }
}
