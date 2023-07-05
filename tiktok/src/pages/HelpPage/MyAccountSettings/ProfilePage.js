import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function ProfilePage() {
  const [showVideoList, setShowVideoList] = useState(false);
  const [showLikedList, setShowLikedList] = useState(false);

  const handleShowPrivateOrPublic = () => {
    setShowVideoList(!showVideoList);
  };
  const handleShowDeleteAccount = () => {
    setShowLikedList(!showLikedList);
  };

  return (
    <>
      <h2>Profile Page</h2>

      <div onClick={handleShowPrivateOrPublic} className={cx("context__title")}>
        <h3>Can't see video list</h3>
        <ChevronRightIcon />
      </div>
      {showVideoList && (
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

      <div onClick={handleShowDeleteAccount} className={cx("context__title")}>
        <h3>Can't create an account with Instagram</h3>
        <ChevronRightIcon />
      </div>
      {showLikedList && (
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

      <HelpOther />
    </>
  );
}

export default ProfilePage;
