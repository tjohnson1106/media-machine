import React, { Component } from "react";

import { Video } from "../../components/Video";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos";
import { VideoMetadata } from "../../components/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox";

export class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="metadata" viewCount={1000} />
        <VideoInfoBox className="video-info-box" />

        <div
          className="metadata"
          style={{ width: "100%", height: "100px", background: "#F91112" }}
        >
          Metadata
        </div>
        <div
          className="video-info-box"
          style={{ width: "100%", height: "100px", background: "#BD10E0" }}
        >
          Video Info box
        </div>
        <div
          className="comments"
          style={{ width: "100%", height: "100px", background: "#9013FE" }}
        >
          comments
        </div>
        <RelatedVideos className="related-videos" />
      </div>
    );
  }
}
