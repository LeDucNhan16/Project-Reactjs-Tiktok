import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function Follow() {
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
      <h2>Follow</h2>

      <div onClick={handleShowVideoPlaying} className={cx("context__title")}>
        <h3>Following and unfollowing users</h3>
        <ChevronRightIcon />
      </div>
      {showVideoPlaying && (
        <ul>
          <li className={cx("context__lists")}>For TikTok Desktop Web:</li>
          <li>To follow a user:</li>
          <li>1. Go to user's profile page</li>
          <li>2. Click "Follow"</li>
          <li>Or </li>
          <li>Click "Follow" next to the user's profile picture</li>

          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>- Restart your device</li>

          <li className={cx("context__lists")}>To unfollow a user:</li>
          <li>1. Go to the user's profile page</li>
          <li>2. Click "Following"</li>

          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>To follow a user:</li>
          <li>1. Go to user's profile page</li>
          <li>2. Tap "Follow"</li>
          <li>Or </li>
          <li>
            Tap "+" located below the user's profile picture on the video screen
          </li>

          <li className={cx("context__lists")}>To unfollow a user:</li>
          <li>1. Go to the user's profile page</li>
          <li>2. Tap "Following"</li>

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
        <h3>"Following too fast"</h3>
        <ChevronRightIcon />
      </div>
      {showVideoLagging && (
        <ul>
          <li className={cx("context__lists")}>
            You may have received this notice if you have been following
            accounts too quickly, which could temporarily disable your account.
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

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Unable to follow a user</h3>
        <ChevronRightIcon />
      </div>
      {showErrorTk && (
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
        </ul>
      )}

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Inaccurate following count</h3>
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

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Inaccurate follower count</h3>
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

export default Follow;
