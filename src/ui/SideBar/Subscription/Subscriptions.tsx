import React, { Component } from "react";
import { Divider } from "semantic-ui-react";

import { Subscription } from "../Subscription";
import { SideBarHeader } from "../SideBarHeader";

class Subscriptions extends Component {
  state = {};
  render() {
    return (
      <>
        <SideBarHeader title="Subscriptions" />
        <Subscription label="MusicChannel" broadcasting />
        <Subscription label="Coursea" amountNewVideos={10} />
        <Subscription label="TEDx Talks" amountNewVideos={23} />
        <Subscription label="Stanford iOS" amountNewVideos={4} />
        <Subscription label="Udacity" amountNewVideos={114} />
      </>
    );
  }
}

export default Subscriptions;
