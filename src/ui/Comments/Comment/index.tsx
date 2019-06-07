import React from "react";
import { Button, Image } from "semantic-ui-react";

import { Rating } from "../../../components/Rating";
import "./Comment.scss";

// props
export function Comment() {
  return (
    <div className="comment">
      <Image
        className="user-image"
        src="http://via.placeholder.com/48x48"
        circular
      />
      <div>
        <div className="user-name">User name</div>
        <span>Comment text</span>
        <div className="comment-action">
          <Rating likeCount={1} />{" "}
          <Button size="mini" compact>
            REPLY
          </Button>
        </div>
      </div>
    </div>
  );
}
