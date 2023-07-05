import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import InboxNotification from "./InboxNatocation";
import PushNotification from "./PushNotification";
import Messages from "./Message";

const cx = classNames.bind(styles);

function NotificationPage() {
  return (
    <div className={cx("context")}>
      <InboxNotification />
      <PushNotification />
      <Messages />
    </div>
  );
}

export default NotificationPage;
