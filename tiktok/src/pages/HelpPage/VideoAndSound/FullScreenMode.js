import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function FullScreenMode() {
  const [showPlayFullVideo, setShowPlayFullVideo] = useState(false);

  const handleShowAccountn = () => {
    setShowPlayFullVideo(!showPlayFullVideo);
  };

  return (
    <>
      <h2>Full screen mode</h2>

      <div onClick={handleShowAccountn} className={cx("context__title")}>
        <h3>How to play a video in full screen mode</h3>
        <ChevronRightIcon />
      </div>
      {showPlayFullVideo && (
        <ul>
          <li className={cx("context__lists")}>
            To play a video in full screen mode, click the video once.
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

export default FullScreenMode;
