import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function CreatorToolsSub() {
  const [showWhatisAnalytics, setShowWhatisAnalytics] = useState(false);
  const [showHowToWhatisAnalytics, setShowHowToWhatisAnalytics] =
    useState(false);
  const [showMyAnalytics, setShowMyAnalytics] = useState(false);
  const [showFollowerNode, setShowFollowerNode] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const handleShowPrivateOrPublic = () => {
    setShowWhatisAnalytics(!showWhatisAnalytics);
  };
  const handleShowDeleteAccount = () => {
    setShowHowToWhatisAnalytics(!showHowToWhatisAnalytics);
  };
  const handleShowMyAnalytics = () => {
    setShowMyAnalytics(!showMyAnalytics);
  };
  const handleShowFollowerNode = () => {
    setShowFollowerNode(!showFollowerNode);
  };
  const handleShowDownload = () => {
    setShowDownload(!showDownload);
  };

  return (
    <>
      <h2>Analytics</h2>

      <div onClick={handleShowPrivateOrPublic} className={cx("context__title")}>
        <h3>What's is Analytics</h3>
        <ChevronRightIcon />
      </div>
      {showWhatisAnalytics && (
        <ul>
          <li className={cx("context__lists")}>
            We're offering dedicated creators an Analytics tool to provide a
            better understanding of their performance and engagement. This tool
            provides an overview and insights on your weekly and monthly views,
            follower growth, and trending videos.
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
        <h3>How to view Analytics</h3>
        <ChevronRightIcon />
      </div>
      {showHowToWhatisAnalytics && (
        <ul>
          <li className={cx("context__lists")}>To view Analytics:</li>
          <li>Visit https://www.tiktok.com/analytics</li>
          <li>1. Click your profile picture on the upper corner</li>
          <li>2. Select "View Analytics" </li>
          <li className={cx("context__lists")}>For Business Account: </li>
          <li>Visit https://www.tiktok.com/business-suite/analytics</li>
          <li>Or</li>
          <li>1. Click your profile picture on the upper corner</li>
          <li>2. Select "Business Suite" "Analytics"</li>

          <li className={cx("context__lists")}>Note: </li>
          <li>
            - If you do not have any public videos yet, you need to publish one
            to apply for the analytics. If this is your first time to experience
            this function, please tap the "Turn on"first on the "Analytics" page
            from mobile TikTok App through your phone.
          </li>
          <li>- This feature is not available for TikTok Mobile Web.</li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowMyAnalytics} className={cx("context__title")}>
        <h3>Why "No data" or "N/A" appears in my Analytics</h3>
        <ChevronRightIcon />
      </div>
      {showMyAnalytics && (
        <ul>
          <li className={cx("context__lists")}>Please note:</li>
          <li>
            1. The Analytics data will only be generated for posted videos after
            you apply for the Analytics.
          </li>
          <li>
            2. The data is displayed in UTC time zone and will need about 1-2
            days to update.
          </li>
          <li>
            3. "Follower activity" is the only Analytics data that is written in
            your local time.
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

      <div onClick={handleShowFollowerNode} className={cx("context__title")}>
        <h3>Analytics about my followers are not displayed</h3>
        <ChevronRightIcon />
      </div>
      {showFollowerNode && (
        <ul>
          <li className={cx("context__lists")}>
            More followers will lead to a more accurate analysis. You will
            receive more insights about your viewers and the content they've
            engaged with once you have 100 followers.
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

      <div onClick={handleShowDownload} className={cx("context__title")}>
        <h3>How to download Analytics data</h3>
        <ChevronRightIcon />
      </div>
      {showDownload && (
        <ul>
          <li className={cx("context__lists")}>To download Analytics data:</li>
          <li className={cx("context__lists")}>
            1. Visit https://www.tiktok.com/analytics
          </li>
          <li>Or</li>
          <li>
            Click your profile picture on the upper corner Select "View
            Analytics"
          </li>
          <li>2. Select “Download Data” on the right side.</li>
          <li className={cx("context__lists")}>For Business Account: </li>
          <li>1. Visit https://www.tiktok.com/business-suite/analytics</li>
          <li>Or</li>
          <li>
            Click your profile picture on the upper corner Select "Business
            Suite" Select "Analytics"
          </li>
          <li>2. Select “Download Data” on the right side.</li>
          <li>Note: This feature is only available for TikTok Desktop Web</li>
          <li className={cx("context__lists")}>
            Note: If you do not have any public videos yet, you need to publish
            one to apply for the analytics. If this is your first time to
            experience this function, please tap the "Turn on" first on the
            "Analytics" page from mobile TikTok App through your phone.
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

export default CreatorToolsSub;
