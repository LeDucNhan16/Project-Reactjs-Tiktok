import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  supperSmall = false,
  small = false,
  primary = false,
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
    large,
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

export default Button;
