import React, { Component } from "react";
import VideoPreview from "../../components/VideoPreview";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <VideoPreview />
      </div>
    );
  }
}

export default Home;
