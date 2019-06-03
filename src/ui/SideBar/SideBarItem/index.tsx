import React from "react";
import { Icon, Menu, SemanticICONS } from "semantic-ui-react";

import "./SideBarItem.scss";

interface Props {
  highlight?: boolean;
  icon: SemanticICONS;
  label: string;
}

export function SideBarItem(props: Props) {
  const highlight = props.highlight ? "highlight-item" : null;

  return (
    <Menu.Item className={["sidebar-item", highlight].join("")}>
      <div className="sidebar-item-alignment-container">
        <span>
          <Icon size="large" name={props.icon} />
        </span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  );
}
