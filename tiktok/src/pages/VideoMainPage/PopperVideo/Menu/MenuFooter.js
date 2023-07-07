import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import Button from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

function MenuFooter({ onBack }) {
  return (
    <header className={cx("menu__footer__submit")}>
      <Button onClick={onBack} largePay>
        Submit
      </Button>
    </header>
  );
}

MenuFooter.propTypes = {
  onBack: PropTypes.func,
};

export default MenuFooter;
