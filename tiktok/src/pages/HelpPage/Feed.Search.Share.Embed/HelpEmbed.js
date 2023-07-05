import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function HelpEmbed() {
  const [showGetTiktokVideo, setShowGetTiktokVideo] = useState(false);

  const handleShowGetTiktokVideo = () => {
    setShowGetTiktokVideo(!showGetTiktokVideo);
  };

  return (
    <>
      <h2>Embed</h2>

      <div onClick={handleShowGetTiktokVideo} className={cx("context__title")}>
        <h3>How to get a TikTok video's embed code</h3>
        <ChevronRightIcon />
      </div>
      {showGetTiktokVideo && (
        <ul>
          <li className={cx("context__lists")}>To embed TikTok videos:</li>
          <li>
            1. Go to the video you'd like to get an embed code in full screen
            mode
          </li>
          <li>2. Click "Embed" icon</li>
          <li>3. Click "Copy Code"</li>
          <li className={cx("context__lists")}>
            Note: This feature isn't available for TikTok Mobile Web.
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

export default HelpEmbed;
