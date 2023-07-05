import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import PurchasingCoins from "./LiveSubscription";
import LiveSubscription from "./PurchasingCoins";

const cx = classNames.bind(styles);

function Balance() {
  return (
    <div className={cx("context")}>
      <LiveSubscription />
      <PurchasingCoins />
    </div>
  );
}

export default Balance;
