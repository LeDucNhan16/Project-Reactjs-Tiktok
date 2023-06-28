import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Setting.module.scss";
import {
  BackIcon,
  BellIcon,
  NextIcon,
  NextUpIcon,
  PrivacyIcon,
  SquareHouseIcon,
  UserIcon,
} from "../../Layouts/Icons/Icons";
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
          <NavLink
            to="http://localhost:3000/setting/"
            className={cx("setting__nav__items")}
          >
            <UserIcon className={cx("icon")} />
            <span>Manage account</span>
          </NavLink>
          <NavLink
            to="http://localhost:3000/setting/#account1"
            className={cx("setting__nav__items")}
          >
            <PrivacyIcon className={cx("icon")} />
            <span>Privacy</span>
          </NavLink>
          <NavLink
            to="http://localhost:3000/setting/#account2"
            className={cx("setting__nav__items")}
          >
            <BellIcon className={cx("icon")} />
            <span>Manage account</span>
          </NavLink>
          <NavLink
            to="http://localhost:3000/setting/#manage"
            className={cx("setting__nav__items")}
          >
            <SquareHouseIcon className={cx("icon")} />
            <span>Manage account</span>
          </NavLink>
        </div>
        <div className={cx("container")}>
          <div className={cx("container__block")}>
            <h2>Manage account</h2>
            <h4>Account control</h4>
            <div className={cx("interact")}>
              <span>Delete account</span>
              <Link>Delete</Link>
            </div>
          </div>
          <div className={cx("container__block")}>
            <h2>Privacy</h2>
            <h4>Discoverability</h4>
            <div className={cx("interact")}>
              <span>
                Private account
                <p>
                  With a private account, only users you approve can follow you
                  and watch your videos. Your existing followers won't be
                  affected.
                </p>
              </span>
            </div>
            <div className={cx("interact")}>
              <span>Blocked accounts</span>
              <NextIcon className={cx("next__icon")} />
            </div>
            <h4>Data</h4>
            <div className={cx("interact")}>
              <span>
                Private account
                <p>
                  With a private account, only users you approve can follow you
                  and watch your videos. Your existing followers won't be
                  affected.
                </p>
              </span>
            </div>
          </div>
          <div i className={cx("container__block")}>
            <h2>Push notifications</h2>
            <h4>Desktop notifications</h4>
            <div className={cx("interact")}>
              <span>
                Allow in browser
                <p>
                  Stay on top of notifications for likes, comments, the latest
                  videos, and more on desktop. You can turn them off anytime.
                </p>
              </span>
            </div>
            <div className={cx("interact")}>
              <span>
                Interactions
                <p>
                  Your preferences will be synced automatically to the TikTok
                  app.
                </p>
              </span>
            </div>
            <div className={cx("interact")}>
              <span>
                Private account
                <p>Likes, comments, new followers, mentions and tags</p>
              </span>
              <NextUpIcon className={cx("next__icon")} />
            </div>
          </div>
          <div className={cx("container__block")}>
            <h2>Business account</h2>
            <h4>Business account</h4>
            <div className={cx("interact")}>
              <p>
                Access marketing tools & exclusive features through your
                business account to better connect with viewers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;
