import React, { Component, ReactNode } from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./App.css";

import Home from "./ui/Home";
import { AppLayout } from "./components/AppLayout";
import { Watch } from "./ui/Watch";
import { youtubeLibraryLoaded } from "./store/actions/api";

const API_KEY = "AIzaSyBeHDktLNXphSNGAkhOSXQ0FvGAjY1S0Hds";

interface Tube {
  youtubeLibraryLoaded: string | any;
}

class App extends Component<Tube, {}> {
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      // @ts-ignore
      window.gapi.load("client", () => {
        // @ts-ignore
        window.gapi.client.setApiKey(API_KEY);
        // @ts-ignore
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.append(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);
