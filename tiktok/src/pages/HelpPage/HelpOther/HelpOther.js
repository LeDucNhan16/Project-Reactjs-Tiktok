import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function HelpOther() {
  const [showOther, setShowOther] = useState(false);

  const handleShowErrorOther = () => {
    setShowOther(!showOther);
  };
  return (
    <>
      <div onClick={handleShowErrorOther} className={cx("context__title")}>
        <h3>Other</h3>
        <ChevronRightIcon />
      </div>
      {showOther && (
        <ul>
          <li className={cx("context__lists")}>
            Can't find the problem you encountered? Tap "Still have problem"
            below to give us details and screenshots of the problem.
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

export default HelpOther;
