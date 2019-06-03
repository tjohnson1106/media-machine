import React from "react";

import "./App.css";
import HeaderNav from "./ui/HeaderNav";
import SideBar from "./ui/SideBar";

const App: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <SideBar />
    </>
  );
};

export default App;
