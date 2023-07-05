import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function HostingLive() {
  const [showSuspended, setShowSuspended] = useState(false);
  const [showErrorLive, setShowErrorLive] = useState(false);
  const [showErrorComment, setShowErrorComment] = useState(false);

  const handleShowSuspended = () => {
    setShowSuspended(!showSuspended);
  };
  const handleShowErrorLive = () => {
    setShowErrorLive(!showErrorLive);
  };
  const handleShowErrorComment = () => {
    setShowErrorComment(!showErrorComment);
  };
  return (
    <>
      <h2>Hosting LIVE</h2>

      <div onClick={handleShowSuspended} className={cx("context__title")}>
        <h3>LIVE is suspended</h3>
        <ChevronRightIcon />
      </div>
      {showSuspended && (
        <ul>
          <li className={cx("context__lists")}>
            TikTok is committed to maintaining a safe and positive LIVE
            experience and reserves the right to suspend accounts that violate
            our Community Guidelines.
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

      <div onClick={handleShowErrorLive} className={cx("context__title")}>
        <h3>I can't start a LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showErrorLive && (
        <ul>
          <li className={cx("context__lists")}>
            TikTok LIVE allows users and creators to interact in real-time.
            Users must be aged 18 years or older to go LIVE and send and receive
            Gifts during a LIVE. When going LIVE as a host, remember to follow
            our Community Guidelines and Terms of Service to promote a safe and
            welcoming space on TikTok.
          </li>
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

      <div onClick={handleShowErrorComment} className={cx("context__title")}>
        <h3>I can't see some of the comments in my LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showErrorComment && (
        <ul>
          <li className={cx("context__lists")}>
            If some comments from your viewers are missing or not shown in your
            LIVE, please make sure the viewer whose comments are missing is not
            banned from sending comments in LIVE due to violation of Community
            Guidelines and is not muted by you or the LIVE moderator. If you
            have confirmed with your viewers about the situations above, please
            submit a feedback by tapping "Need more help" below along with the
            following information:
          </li>
          <li>
            1. The username shown as @XXX of the viewer whose comment is missing
          </li>
          <li>2. A screenshot of the exact comment from the LIVE viewer</li>

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
    </>
  );
}

export default HostingLive;
