import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function PostingVideo() {
  const [showBlockPost, setShowBlockPost] = useState(false);
  const [showScheduleVideo, setShowScheduleVideo] = useState(false);
  const [showUnaPostVideo, setShowUnaPostVideo] = useState(false);
  const [showAudioAndVideoSync, setShowAudioAndVideoSync] = useState(false);

  const handleShowErrorPhone = () => {
    setShowBlockPost(!showBlockPost);
  };
  const handleShowChange = () => {
    setShowScheduleVideo(!showScheduleVideo);
  };
  const handleShowHaveNotReceived = () => {
    setShowUnaPostVideo(!showUnaPostVideo);
  };
  const handleShowHaveNotReceivedEmail = () => {
    setShowAudioAndVideoSync(!showAudioAndVideoSync);
  };
  return (
    <>
      <h2>Posting Video</h2>

      <div onClick={handleShowErrorPhone} className={cx("context__title")}>
        <h3>Blocked from posting</h3>
        <ChevronRightIcon />
      </div>
      {showBlockPost && (
        <ul>
          <li className={cx("context__lists")}>
            TikTok is committed to maintaining a safe and fun experience and
            reserves the right to suspend accounts that violate our Community
            Guidelines. If you feel this decision was made in error, submit an
            appeal to report the problem and provide your username (with the "@"
            handle).
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

      <div onClick={handleShowChange} className={cx("context__title")}>
        <h3>Changing the phone number / email associated with an account</h3>
        <ChevronRightIcon />
      </div>
      {showScheduleVideo && (
        <ul>
          <li className={cx("context__lists")}>To use this feature:</li>
          <li>
            {" "}
            1. Log into your account on TikTok Desktop Web and click on the
            "Upload" icon at the top of your feed.
          </li>
          <li> 2. Upload the video you want to schedule.</li>
          <li>
            {" "}
            3. After uploading and editing, toggle the schedule button and
            select a date and time to schedule your post. (Time zone is
            defaulted to your computer setting.){" "}
          </li>
          <li> 4. Click schedule to set up your post! </li>
          <li>Note:</li>
          <li>
            {" "}
            1. Only a "Business Account" or over with a 10,000 followers or more
            can access desktop scheduling.{" "}
          </li>
          <li>
            2. Scheduled posts can be seen in the Profile view and cannot be
            edited but can be deleted.
          </li>
          <li>
            {" "}
            3. When a scheduled video is posted in app, you'll receive a push
            notification to alert that your post is live.
          </li>
          <li>
            {" "}
            4. You can schedule a minimum of 15 minutes and a maximum of 10 days
            in advance of publishing.{" "}
          </li>
          <li> 5. This feature is not available for TikTok Mobile Web.</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowHaveNotReceived} className={cx("context__title")}>
        <h3>Unable to post videos</h3>
        <ChevronRightIcon />
      </div>
      {showUnaPostVideo && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>
          <li>1. Refresh the page</li>
          <li>2. Restart the browser</li>
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
        onClick={handleShowHaveNotReceivedEmail}
        className={cx("context__title")}
      >
        <h3>Changing account bio</h3>
        <ChevronRightIcon />
      </div>
      {showAudioAndVideoSync && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>
          <li>1. Refresh the page</li>
          <li>2. Restart the browser</li>
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

export default PostingVideo;
