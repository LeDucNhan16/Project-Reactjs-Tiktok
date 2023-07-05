import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function VideoPlaying() {
  const [showVideoPlaying, setShowVideoPlaying] = useState(false);
  const [showVideoLagging, setShowVideoLagging] = useState(false);
  const [showErrorTk, setShowErrorTK] = useState(false);

  const handleShowVideoPlaying = () => {
    setShowVideoPlaying(!showVideoPlaying);
  };
  const handleShowErrorInstagram = () => {
    setShowVideoLagging(!showVideoLagging);
  };
  const handleShowErrorAcountn = () => {
    setShowErrorTK(!showErrorTk);
  };

  return (
    <>
      <h2>Video Playing</h2>

      <div onClick={handleShowVideoPlaying} className={cx("context__title")}>
        <h3>Video not playing</h3>
        <ChevronRightIcon />
      </div>
      {showVideoPlaying && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps: </li>
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

      <div onClick={handleShowErrorInstagram} className={cx("context__title")}>
        <h3>Video lagging while playing</h3>
        <ChevronRightIcon />
      </div>
      {showVideoLagging && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps: </li>
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
        </ul>
      )}

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Issues creating an account</h3>
        <ChevronRightIcon />
      </div>
      {showErrorTk && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps: </li>
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
        </ul>
      )}

      <HelpOther />
    </>
  );
}

export default VideoPlaying;
