import React, { Component } from "react";

import { CommentsHeader } from "./CommentsHeader";

interface Props {
  amountComments?: React.ReactNode | number;
  className?: string;
}

class Comments extends Component<Props> {
  state = {};
  render() {
    return (
      <div>
        {this.props.className}
        <CommentsHeader amountComments={this.props.amountComments} />
      </div>
    );
  }
}

export default Comments;
