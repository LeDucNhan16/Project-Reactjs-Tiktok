import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function PushNotification() {
  const [showErrorNumberLike, setShowErrorNumberLike] = useState(false);

  const handleShowErrorAcountn = () => {
    setShowErrorNumberLike(!showErrorNumberLike);
  };

  return (
    <>
      <h2>Push notification</h2>

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Personalize Push notifications</h3>
        <ChevronRightIcon />
      </div>
      {showErrorNumberLike && (
        <ul>
          <li className={cx("context__lists")}>
            To customize push notifications:
          </li>
          <li>1. Click your profile picture on the upper corner</li>
          <li>2. Select "Settings".</li>
          <li>3. Select “Push Notifications".</li>
          <li>4. Enable or Disable certain notifications.</li>

          <li className={cx("context__lists")}>
            Note: This feature is not available for TikTok Mobile Web.{" "}
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
        <h3>Unable to receive push notifications</h3>
        <ChevronRightIcon />
      </div>
      {showErrorNumberLike && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>
          <li>1. Refresh the page</li>
          <li>2. Restart the browser</li>

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

export default PushNotification;
