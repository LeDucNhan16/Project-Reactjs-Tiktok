import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ to, icon, activeIcon, title }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu__items", { active: nav.isActive })}
    >
      <span className={cx("menu__icon")}>{icon}</span>
      <span className={cx("menu__active__icon")}>{activeIcon}</span>
      <span className={cx("menu__title")}>{title}</span>
    </NavLink>
  );
}

Menu.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default Menu;
