import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import CreatorToolsSub from "./CreatorTools";
import AccountTransferError from "./AccountTransferError";

const cx = classNames.bind(styles);

function CreatorTools() {
  return (
    <div className={cx("context")}>
      <CreatorToolsSub />
      <AccountTransferError />
    </div>
  );
}

export default CreatorTools;
