import React, { Component } from "react";

import { CommentsHeader } from "./CommentsHeader";
import { AddComment } from "./AddComment";
import { Comment } from "./Comment";

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
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Comments;
