import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function HeaderMenu({ onBack }) {
  return (
    <header onClick={onBack} className={cx("menu__item")}>
      <button className={cx("menu__item__btn")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("menu__item__title")}>Back</h4>
    </header>
  );
}

HeaderMenu.propTypes = {
  onBack: PropTypes.func,
};

export default HeaderMenu;
