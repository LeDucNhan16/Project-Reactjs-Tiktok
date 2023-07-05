import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function HelpShare() {
  const [showHowToShareVideos, setShowHowToShareVideos] = useState(false);
  const [showErrorShareVideo, setShowErrorShareVideo] = useState(false);

  const handleShowHowToShareVideos = () => {
    setShowHowToShareVideos(!showHowToShareVideos);
  };
  const handleShowErrorShareVideo = () => {
    setShowErrorShareVideo(!showErrorShareVideo);
  };

  return (
    <>
      <h2>Share</h2>

      <div
        onClick={handleShowHowToShareVideos}
        className={cx("context__title")}
      >
        <h3>How to share videos</h3>
        <ChevronRightIcon />
      </div>
      {showHowToShareVideos && (
        <ul>
          <li className={cx("context__lists")}>To share a video:</li>
          <li className={cx("context__lists")}>
            1. Go to the video you'd like to share.
          </li>
          <li>2. Tap the "Share" icon.</li>
          <li>3. Choose how you'd like to share the video.</li>
          <li>4. Follow the instructions for the channel you select.</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowErrorShareVideo} className={cx("context__title")}>
        <h3>I can't share videos</h3>
        <ChevronRightIcon />
      </div>
      {showErrorShareVideo && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>
          <li className={cx("context__lists")}>For TikTok Desktop Web:</li>
          <li>- Refresh the page</li>
          <li>- Restart the browser</li>
          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>- Switch between Wi-Fi and mobile data</li>
          <li>- Refresh the page</li>
          <li>- Restart the browser</li>
          <li>- Restart your device</li>
          <li className={cx("context__lists")}>Still not working?</li>
          <li>
            Tap "Still have problem" below and provide more details and
            screenshots of the problem.
          </li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <HelpOther />
    </>
  );
}

export default HelpShare;
