import classNames from "classnames/bind";
import { useState } from "react";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function HelpDiscover() {
  const [showDiscover, setShowDiscover] = useState(false);

  const handleShowDiscover = () => {
    setShowDiscover(!showDiscover);
  };

  return (
    <>
      <h2>Discover</h2>

      <div onClick={handleShowDiscover} className={cx("context__title")}>
        <h3>I don't like suggested accounts/sounds/hashtags</h3>
        <ChevronRightIcon />
      </div>
      {showDiscover && (
        <ul>
          <li className={cx("context__lists")}>
            Thank you for sharing your suggestions and feedback! We appreciate
            your help keeping TikTok safe and fun.
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

export default HelpDiscover;
