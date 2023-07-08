import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Button from "../../../../components/Button/Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button className={cx("menu__items")} to={data.to} onClick={onClick}>
      <span className={cx("menu__items__list")}>
        {data.title}
        {data.icon}
      </span>
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default MenuItem;
