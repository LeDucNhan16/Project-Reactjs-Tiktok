import styles from "./MainOnly.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MainOnly({ children }) {
  return <div className={cx("content")}>{children}</div>;
}

export default MainOnly;
