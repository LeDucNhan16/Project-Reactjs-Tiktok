import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function VideoMissing() {
  const [showViolate, setShowViolate] = useState(false);

  const handleShowErrorPhone = () => {
    setShowViolate(!showViolate);
  };
  return (
    <>
      <h2>Video Missing</h2>

      <div onClick={handleShowErrorPhone} className={cx("context__title")}>
        <h3>My video was removed due to violating Community Guidelines</h3>
        <ChevronRightIcon />
      </div>
      {showViolate && (
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
    </>
  );
}

export default VideoMissing;
