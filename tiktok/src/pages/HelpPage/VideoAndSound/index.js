import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import VideoPlaying from "./VideoPlaying";
import FullScreenMode from "./FullScreenMode";
import PostingVideo from "./PostingVideo";
import Sound from "./Sound";
import VideoMissing from "./VideoMissing";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function VideoAndSound() {
  return (
    <div className={cx("context")}>
      <VideoPlaying />
      <FullScreenMode />
      <PostingVideo />
      <Sound />
      <VideoMissing />
      <HelpOther />
    </div>
  );
}

export default VideoAndSound;
