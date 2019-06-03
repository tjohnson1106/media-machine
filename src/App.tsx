import React from "react";

import "./App.css";
import HeaderNav from "./ui/HeaderNav";
import SideBar from "./ui/SideBar";
import Home from "./ui/Home";

const App: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <SideBar />
      <Home />
    </>
  );
};

export default App;
