import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function Messages() {
  const [showErrorComment, setShowErrorComment] = useState(false);

  const handleShowErrorComment = () => {
    setShowErrorComment(!showErrorComment);
  };

  return (
    <>
      <h2>Message</h2>

      <div onClick={handleShowErrorComment} className={cx("context__title")}>
        <h3>Messaging is no longer available</h3>
        <ChevronRightIcon />
      </div>
      {showErrorComment && (
        <ul>
          <li className={cx("context__lists")}>
            As part of our commitment to improving safety on TikTok, we are
            introducing new restrictions on who can use our Direct Messaging
            feature.
          </li>
          <li className={cx("context__lists")}>
            Only those aged 16 and over will be able to send and receive Direct
            Messages. Users who do not meet the age requirements to use Direct
            Messaging will no longer have access to it.
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
        <h3>Unable to send messages</h3>
        <ChevronRightIcon />
      </div>
      {showErrorComment && (
        <ul>
          <li className={cx("context__lists")}>To send messages:</li>
          <li>To send messages:</li>
          <li>
            1. Enable messages in "Privacy" setting through the TikTok mobile
            App on your phone.
          </li>
          <li>2. Link your phone number to your account</li>
          <li>3. Make sure you are following each other</li>

          <li className={cx("context__lists")}>
            Still have a problem? Please send screenshots of error messages that
            occur from sending messages.
          </li>
          <li>Note: This feature is not available for TikTok Mobile Web.</li>

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
        <h3>Unable to receive messages</h3>
        <ChevronRightIcon />
      </div>
      {showErrorComment && (
        <ul>
          <li className={cx("context__lists")}>Please make sure:</li>
          <li>1. You are following each other</li>
          <li>
            2. Enable messages in "Privacy" setting through the TikTok mobile
            App on your phone.
          </li>

          <li className={cx("context__lists")}>
            Please try working through these steps:
          </li>
          <li>1. Switch between WiFi and mobile data.</li>
          <li>2. Refresh your message page.</li>

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

      <HelpOther />
    </>
  );
}

export default Messages;
