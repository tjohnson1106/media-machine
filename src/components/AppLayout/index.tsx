import React from "react";
import "./AppLayout.scss";
import HeaderNav from "../../ui/HeaderNav";

interface Props {
  children?: React.ReactNode | any;
}
export function AppLayout(props: Props) {
  return (
    <div className="app-layout">
      <HeaderNav />
      {props.children}
    </div>
  );
}
