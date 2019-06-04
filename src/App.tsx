import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./ui/Home";
import { AppLayout } from "./components/AppLayout";
import { Watch } from "./ui/Watch";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/watch" Component={Watch} />
        <Route path="/" Component={Home} />
      </Switch>
    </AppLayout>
  );
};

export default App;
