import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import {
  DataDownIcon,
  SettingIcon,
  UserIcon,
  WatchIcon,
} from "../../Layouts/Icons/Icons";
import Button from "../../components/Button/Button";
import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function Nav__Date() {
  return (
    <Tabs className={cx("tabs")}>
      <TabList className={cx("nav")}>
        <Tab className={cx("nav__items")}>Request data</Tab>
        <Tab className={cx("nav__items")}>Download data</Tab>
      </TabList>

      <TabPanel>
        <div className={cx("content")}>
          <span className={cx("content__sub")}>
            Your request may take a few days to process. After your file is
            ready it will be available to download for up to 4 days. It will
            expire if you request data again.
          </span>
          <div className={cx("content__main")}>
            <h4>Data may include</h4>
            <div className={cx("content__main__icon")}>
              <UserIcon className={cx("data__icon")} />
              <ul>
                <p>Your profile</p>
                <span>
                  Includes your username, profile photo, bio, and contact info
                  (such as your email address and phone number).
                </span>
              </ul>
            </div>
            <div className={cx("content__main__icon")}>
              <WatchIcon className={cx("data__icon")} />
              <ul>
                <p>Your activity</p>
                <span>
                  Includes your video history, comment history, chat history,
                  virtual items purchase history, like history, Favorites
                  history, and shopping activity.
                </span>
              </ul>
            </div>
            <div className={cx("content__main__icon")}>
              <SettingIcon className={cx("data__icon")} />
              <ul>
                <p>Your app settings</p>
                <span>
                  Includes your privacy settings, notification settings, and
                  language settings.
                </span>
              </ul>
            </div>
          </div>
          <div className={cx("content__main")}>
            <h4>Select file format</h4>
            <div className={cx("content__main__icon")}>
              <DataDownIcon className={cx("data__icon")} />
              <ul>
                <p>TXT</p>
                <span>Easy-to-read text file</span>
              </ul>
              <input name="date" type="radio" />
            </div>
            <div className={cx("content__main__icon")}>
              <DataDownIcon className={cx("data__icon")} />
              <ul>
                <p for="json">JSON</p>
                <span>Machine-readable file</span>
              </ul>
              <input name="date" type="radio" />
            </div>
          </div>
          <div className={cx("content__btn")}>
            <Button largePay>Request data </Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={cx("tabs__sub")}>
        <div className={cx("content__download")}>
          <DataDownIcon className={cx("date__con__giant")} />
          <p>No data file requests yet</p>
          <span>You have not requested a data file yet. </span>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default Nav__Date;
