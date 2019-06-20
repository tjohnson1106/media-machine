import React, { Component } from "react";

import SideBar from "../SideBar";
import HomeContent from "./HomeContent";

class Home extends Component {
  render() {
    return (
      <>
        <SideBar />

        <HomeContent />
      </>
    );
  }
}

export default Home;
