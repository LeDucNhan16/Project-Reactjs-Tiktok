import classNames from "classnames/bind";

import styles from "../HelpPage/Help.module.scss";
import { ChevronRightIcon } from "../../Layouts/Icons/Icons";
import Button from "../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function AbuseReport() {
  const [showReportAccount, setShowReportAccount] = useState(false);
  const [showReportVideo, setShowReportVideo] = useState(false);
  const [showReportSound, setShowReportSound] = useState(false);
  const [showReportLive, setShowReportLive] = useState(false);

  const handleShowAbuseReport = () => {
    setShowReportAccount(!showReportAccount);
  };
  const handleShowReportVideo = () => {
    setShowReportVideo(!showReportVideo);
  };
  const handleShowReportSound = () => {
    setShowReportSound(!showReportSound);
  };
  const handleShowReportLive = () => {
    setShowReportLive(!showReportLive);
  };

  return (
    <div className={cx("context")}>
      <h2>How to Report</h2>
      <div onClick={handleShowAbuseReport} className={cx("context__title")}>
        <h3>Report an account</h3>
        <ChevronRightIcon />
      </div>
      {showReportAccount && (
        <ul>
          <li>To report an account:</li>
          <li>1. Go to profile page of the account you want to report</li>
          <li>2. Click "...".</li>
          <li>3. Select "Report"</li>
          <li>4. Follow the on-screen instructions</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}
      <div onClick={handleShowReportVideo} className={cx("context__title")}>
        <h3>Report a video</h3>
        <ChevronRightIcon />
      </div>
      {showReportVideo && (
        <ul>
          <li className={cx("context__lists")}>To report a video:</li>
          <li>1. Go to the video.</li>
          <li>2. Tap "Report" .</li>
          <li>3. Follow the on-screen instructions.</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}
      <div onClick={handleShowReportSound} className={cx("context__title")}>
        <h3>Report a sound</h3>
        <ChevronRightIcon />
      </div>
      {showReportSound && (
        <ul>
          <li className={cx("context__lists")}>To report a sound:</li>

          <li>1. Tap on the sound you're reporting</li>
          <li>2. Tap "...".</li>
          <li>3. Tap "Report"</li>
          <li>4. Follow the on-screen instructions</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}
      <div onClick={handleShowReportLive} className={cx("context__title")}>
        <h3>Report a LIVE</h3>
        <ChevronRightIcon />
      </div>
      {showReportLive && (
        <ul>
          <li className={cx("context__lists")}>
            Content that does not follow our Community Guidelines can be
            reported any time.
          </li>
          <li>To report a LIVE:</li>

          <li className={cx("context__lists")}>
            1. Go to the LIVE page you'd like to report.
          </li>
          <li>2. Tap "...".</li>
          <li>3. Tap "Report".</li>
          <li>4. Follow the on-screen instructions.</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}

export default AbuseReport;
