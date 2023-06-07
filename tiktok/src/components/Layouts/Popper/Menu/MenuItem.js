import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Button from "../../../Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx("menu_items")}
      iconItem={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propType = {
  data: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
