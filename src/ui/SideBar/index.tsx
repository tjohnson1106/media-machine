import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

// import SideBarItem from "./SideBarItem"
import "./SideBar.scss";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        {/* TODO */}
      </Menu>
    );
  }
}

export default SideBar;
