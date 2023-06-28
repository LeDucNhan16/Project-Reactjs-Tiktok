import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Message.module.scss";
import { BackIcon, SettingBigIcon } from "../../Layouts/Icons/Icons";
import config from "../../config/index";

const cx = classNames.bind(styles);

function Setting() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapperSub")}>
        <Link to={config.routers.Home}>
          <BackIcon className={cx("icon__back")} />
        </Link>
        <div className={cx("setting__nav")}>
          <div className={cx("title")}>
            <h1>Message</h1>
            <SettingBigIcon className={cx("setting__icon")} />
          </div>
          <div className={cx("title__items")}>
            <span className={cx("title__items__sub")}>No Message yet</span>
          </div>
        </div>
        <div className={cx("container")}></div>
      </div>
    </div>
  );
}
export default Setting;
