import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function HelpFeed() {
  const [showErrorOnThe, setShowErrorOnThe] = useState(false);
  const [showErrorNoVideoOnThe, setShowErrorNoVideoOnThe] = useState(false);

  const handleShowErrorOnThe = () => {
    setShowErrorOnThe(!showErrorOnThe);
  };
  const handleShowErrorNoVideoOnThe = () => {
    setShowErrorNoVideoOnThe(!showErrorNoVideoOnThe);
  };
  return (
    <>
      <h2>Feed</h2>

      <div onClick={handleShowErrorOnThe} className={cx("context__title")}>
        <h3>I don't like videos on the "For You" feed</h3>
        <ChevronRightIcon />
      </div>
      {showErrorOnThe && (
        <ul>
          <li className={cx("context__lists")}>
            Thank you for sharing your suggestions and feedback! We appreciate
            your help keeping TikTok safe and fun.
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

      <div
        onClick={handleShowErrorNoVideoOnThe}
        className={cx("context__title")}
      >
        <h3>No videos on the feed</h3>
        <ChevronRightIcon />
      </div>
      {showErrorNoVideoOnThe && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>

          <li className={cx("context__lists")}>For TikTok Desktop Web:</li>
          <li>- Refresh the page</li>
          <li>- Restart the browser</li>

          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>- Switch between Wi-Fi and mobile data</li>
          <li>- Refresh the page</li>
          <li>- Restart the browser</li>
          <li>
            Tap "Still have problem" below and provide more details and
            screenshots of the problem.
          </li>

          <li className={cx("context__lists")}>Still not working?</li>
          <li>- Restart the browser</li>

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

export default HelpFeed;
