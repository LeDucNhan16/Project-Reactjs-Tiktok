import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import CreateATikTokAccount from "./CreateATikTokAccount";
import LoginPage from "./LoginPage";
import ManageAccount from "./ManageAccount";
import EmailAndPhone from "./EmailAndPhone";
import EditingProfile from "./EditingProfile";
import ProfilePage from "./ProfilePage";

const cx = classNames.bind(styles);

function MyAccountSettings() {
  return (
    <div className={cx("context")}>
      <CreateATikTokAccount />
      <LoginPage />
      <ManageAccount />
      <EmailAndPhone />
      <EditingProfile />
      <ProfilePage />
    </div>
  );
}

export default MyAccountSettings;
