import React from "react";
import { Menu } from "semantic-ui-react";

import "./SideBarHeader.scss";

interface Props {
  heading?: string | boolean;
  title: string;
}

export function SideBarHeader(props: Props) {
  const heading = props.title ? props.title.toUpperCase() : "";

  return (
    <Menu.Item>
      <Menu.Header className="side-bar-header">{heading}</Menu.Header>
    </Menu.Item>
  );
}
