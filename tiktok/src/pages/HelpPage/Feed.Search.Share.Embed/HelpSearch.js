import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function HelpSearch() {
  const [showSearching, setShowSearching] = useState(false);
  const [showNoUser, setShowNoUser] = useState(false);

  const handleShowSearch = () => {
    setShowSearching(!showSearching);
  };
  const handleShowDiscover = () => {
    setShowNoUser(!showNoUser);
  };

  return (
    <>
      <h2>Search</h2>

      <div onClick={handleShowSearch} className={cx("context__title")}>
        <h3>Searching for content</h3>
        <ChevronRightIcon />
      </div>
      {showSearching && (
        <ul>
          <li className={cx("context__lists")}>
            TikTok Desktop Web currently only supports searching creators and
            videos. You can search for a specific creator or video in the search
            bar located at the top of the page of TikTok Desktop Web. Note: This
            feature is not available for TikTok Mobile Web.{" "}
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

      <div onClick={handleShowDiscover} className={cx("context__title")}>
        <h3>Unable to find users or specific content</h3>
        <ChevronRightIcon />
      </div>
      {showNoUser && (
        <ul>
          <li className={cx("context__lists")}>Try the following steps:</li>
          <li>1. Refresh the page</li>
          <li>2. Restart the browser</li>

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

export default HelpSearch;
