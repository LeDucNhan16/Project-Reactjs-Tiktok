import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function Viewing() {
  const [showNotFoundLive, setShowNotFoundLive] = useState(false);
  const [showNotFoundComment, setShowNotFoundComment] = useState(false);
  const [showLiveLag, setShowLiveLag] = useState(false);
  const [showErrorLoagding, setShowErrorLoagding] = useState(false);
  const [showNoSoundLive, setShowNoSoundLive] = useState(false);
  const [showErrorIssues, setShowErrorIssues] = useState(false);

  const handleShowNotFoundLive = () => {
    setShowNotFoundLive(!showNotFoundLive);
  };
  const handleShowNotFoundComment = () => {
    setShowNotFoundComment(!showNotFoundComment);
  };
  const handleShowLiveLag = () => {
    setShowLiveLag(!showLiveLag);
  };
  const handleShowErrorLoagding = () => {
    setShowErrorLoagding(!showErrorLoagding);
  };
  const handleShowNoSoundLive = () => {
    setShowNoSoundLive(!showNoSoundLive);
  };
  const handleShowErrorAcountn = () => {
    setShowErrorIssues(!showErrorIssues);
  };

  return (
    <>
      <h2>Viewing LIVE</h2>

      <div onClick={handleShowNotFoundLive} className={cx("context__title")}>
        <h3>I can't find any LIVE on TikTok</h3>
        <ChevronRightIcon />
      </div>
      {showNotFoundLive && (
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

      <div onClick={handleShowNotFoundComment} className={cx("context__title")}>
        <h3>I can't send/see comments in LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showNotFoundComment && (
        <ul>
          <li className={cx("context__lists")}>
            If some of your comments are missing or not shown in the LIVE,
            please make sure you are not banned from sending comments in LIVE
            due to the violation of Community Guidelines and you are not muted
            by the host or the LIVE moderator. If you have checked the
            situations above, please submit a feedback by tapping "Need more
            help" below with the following information:
          </li>
          <li>1. Your username shown as @XXX </li>
          <li>2. A screenshot of the exact comment that is missing</li>

          <li className={cx("context__lists")}>
            Note: This feature is not available for TikTok Mobile Web.
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

      <div onClick={handleShowLiveLag} className={cx("context__title")}>
        <h3>LIVE was lagging/freezing</h3>
        <ChevronRightIcon />
      </div>
      {showLiveLag && (
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

      <div onClick={handleShowErrorLoagding} className={cx("context__title")}>
        <h3>LIVE kept loading/No image or sound, just comments in LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showErrorLoagding && (
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

      <div onClick={handleShowNoSoundLive} className={cx("context__title")}>
        <h3>No sound in LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showNoSoundLive && (
        <ul>
          <li className={cx("context__lists")}>
            Please try to switch between Wi-Fi and data to see if the problem
            will get fixed. If the problem persists, please send us a screen
            recording of the problem with the following information for further
            analysis:
          </li>

          <li>1. The time when the problem occurred</li>
          <li>2. The username of the host shown as @XXX</li>
          <li>
            To send a screen video you can choose one of the methods below:
          </li>
          <li>
            1. Post the video in our APP and send us the link of the video
            through [report problem].
          </li>
          <li>
            2. Send the video to our email: feedback@tiktok.com (please write
            your username in the email).{" "}
          </li>

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
      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Other hosting LIVE issues</h3>
        <ChevronRightIcon />
      </div>
      {showErrorIssues && (
        <ul>
          <li className={cx("context__lists")}>
            Can't find the problem you encountered when you were hosting a LIVE
            on TikTok PC web (tiktok.com)?
          </li>

          <li>
            Tap "Need more help" below to provide details and screenshots of the
            problem.
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
    </>
  );
}

export default Viewing;
