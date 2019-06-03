import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";

import "./HeaderNav.scss";
import logo from "../assets/images/logo.jpg";

class HeaderNav extends Component {
  state = {};
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Image src={logo} size="tiny" />
        </Menu.Item>

        <Menu.Menu className="nav-container">{/* TODO */}</Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
