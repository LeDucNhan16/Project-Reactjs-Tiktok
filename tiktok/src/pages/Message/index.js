import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Button from "../../components/Button/Button";
import styles from "./Message.module.scss";
import {
  BackIcon,
  DeleteIcon,
  SettingBigIcon,
} from "../../Layouts/Icons/Icons";
import config from "../../config/index";
import { useState } from "react";

const cx = classNames.bind(styles);

function Setting() {
  const [showSettingMessage, setShowSettingMessage] = useState(false);

  const handleShowSettingMessage = () => {
    setShowSettingMessage(true);
  };

  const handleMountSettingMessage = () => {
    setShowSettingMessage(false);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapperSub")}>
        <Link to={config.routers.Home}>
          <BackIcon className={cx("icon__back")} />
        </Link>
        <div className={cx("setting__nav")}>
          <div className={cx("title")}>
            <h1>Message</h1>
            <button onClick={handleShowSettingMessage}>
              <SettingBigIcon className={cx("setting__icon")} />
            </button>
          </div>
          <div className={cx("title__items")}>
            <span className={cx("title__items__sub")}>No Message yet</span>
          </div>
        </div>
        <div className={cx("container")}></div>
      </div>
      {showSettingMessage && (
        <div className={cx("block")}>
          <div className={cx("block__message")}>
            <div className={cx("head__massage__setting")}>
              <h1>Message settings</h1>
              <button onClick={handleMountSettingMessage}>
                <DeleteIcon className={cx("icon__delete")} />
              </button>
            </div>
            <div className={cx("body__message__setting")}>
              <h4>Who can send you direct messages</h4>
              <span>
                With any option, you can receive messages from users that you've
                sent messages to. Friends are your followers that you follow
                back.
              </span>
              <div>
                <input className={cx("btn")} name="gender" type="radio" />
                Friends
              </div>
              <div>
                <input className={cx("btn")} name="gender" type="radio" />
                No one
              </div>
            </div>
            <div className={cx("block__btn")}>
              <Button onClick={handleMountSettingMessage} primaryActive>
                Cancel
              </Button>
              <Button onClick={handleMountSettingMessage} primaryRed>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Setting;
