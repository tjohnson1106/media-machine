import React from "react";
import { Button, Icon } from "semantic-ui-react";

import "./CommentsHeader.scss";

interface Props {
  amountComments?: React.ReactNode | number;
}

export function CommentsHeader(props: Props) {
  return (
    <div className="comments-header">
      <h4> {props.amountComments} Comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left" />
        Sort by
      </Button>
    </div>
  );
}
