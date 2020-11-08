import React, { Component } from "react";
import video1 from "./components/video/vd1.mp4";


class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} />
      </div>
    );
  }
}

export default Video;