import PropTypes from "prop-types";
import classNames from "classnames/bind";

import { IconLogOut } from "../../Icons/Icons";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuLoginOut({ onBack }) {
  return (
    <header className={cx("menu_login")}>
      <button onClick={onBack} className={cx("menu_login_btn")}>
        <IconLogOut />
      </button>
      <h4 className={cx("menu_login_title")}>Đăng xuất</h4>
    </header>
  );
}

MenuLoginOut.propTypes = {
  onBack: PropTypes.func,
};

export default MenuLoginOut;
