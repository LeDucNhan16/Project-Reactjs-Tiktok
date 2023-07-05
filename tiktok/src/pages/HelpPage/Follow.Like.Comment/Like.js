import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function Like() {
  const [showTapping, setShowTapping] = useState(false);
  const [showUnableToLike, setShowUnableToLike] = useState(false);
  const [showErrorNumberLike, setShowErrorNumberLike] = useState(false);

  const handleShowVideoPlaying = () => {
    setShowTapping(!showTapping);
  };
  const handleShowUnableToLike = () => {
    setShowUnableToLike(!showUnableToLike);
  };
  const handleShowErrorAcountn = () => {
    setShowErrorNumberLike(!showErrorNumberLike);
  };

  return (
    <>
      <h2>Like</h2>

      <div onClick={handleShowVideoPlaying} className={cx("context__title")}>
        <h3>"Tapping too fast"</h3>
        <ChevronRightIcon />
      </div>
      {showTapping && (
        <ul>
          <li className={cx("context__lists")}>
            You may have received this notice if you have been liking content
            too quickly, which could temporarily disable your account.
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

      <div onClick={handleShowUnableToLike} className={cx("context__title")}>
        <h3>Unable to follow a user</h3>
        <ChevronRightIcon />
      </div>
      {showUnableToLike && (
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

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Inaccurate like count</h3>
        <ChevronRightIcon />
      </div>
      {showErrorNumberLike && (
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

      <HelpOther />
    </>
  );
}

export default Like;
