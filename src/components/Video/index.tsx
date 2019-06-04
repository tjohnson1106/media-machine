import React from "react";

import "./Video.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

interface Props {
  className?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> &
    string;
  id?: any;
}

export function Video(props: Props) {
  if (!props.id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${props.id}`;
  return (
    <div className="container" {...props.className}>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={"video"}
        />
      </div>
    </div>
  );
}
