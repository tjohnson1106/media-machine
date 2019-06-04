import React, { Component } from "react";
import { VideoGrid } from "../../components/VideoGrid";
import SideBar from "../SideBar";

class Home extends Component {
  render() {
    return (
      <>
        <SideBar />
        <div className="home">
          <div className="responsive-video-home-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="Some topic" hideDivider={true} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
