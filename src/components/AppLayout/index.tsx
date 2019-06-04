import React from "react";
import "./AppLayout.scss";
import HeaderNav from "../../ui/HeaderNav";

interface Props {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  <div className="app-layout">
    <HeaderNav />
    {props.children}
  </div>;
}
