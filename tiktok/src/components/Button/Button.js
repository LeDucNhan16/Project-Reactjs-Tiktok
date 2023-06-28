import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  supperSmall = false,
  small = false,
  primary = false,
  primaryRed = false,
  primaryActive = false,
  large = false,
  largePay = false,
  children,
  onClick,
  iconItem,
  bottomRight,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  const classes = cx("wrapper", {
    supperSmall,
    small,
    primary,
    primaryActive,
    large,
    primaryRed,
    largePay,
    iconItem,
    bottomRight,
  });

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      {iconItem && <span className={cx("icon")}>{iconItem}</span>}
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  supperSmall: PropTypes.bool,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  primaryRed: PropTypes.bool,
  primaryActive: PropTypes.bool,
  large: PropTypes.bool,
  largePay: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  iconItem: PropTypes.node,
  bottomRight: PropTypes.bool,
};

export default Button;
