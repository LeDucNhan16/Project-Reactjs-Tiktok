import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import HostingLive from "./HostingLive";
import Viewing from "./Viewing";

const cx = classNames.bind(styles);

function Live() {
  return (
    <div className={cx("context")}>
      <HostingLive />
      <Viewing />
    </div>
  );
}

export default Live;
