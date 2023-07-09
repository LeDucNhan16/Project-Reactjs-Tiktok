import Header from "../components/Header/Header";
import styles from "./HeaderMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("inner")}>
          <Header />
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
