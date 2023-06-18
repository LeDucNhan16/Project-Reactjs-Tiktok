import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./SuggetstedAccount.module.scss";
import Image from "../../Image/Image";

const cx = classNames.bind(styles);

function AccountItemSidebar({ to, alt, title, nickname }) {
  return (
    <Link className={cx("accounts__items")} to={to} target="_blank">
      <Image alt="avt" src={alt} className={cx("accounts__avatar")} />
      <div className={cx("accounts__info")}>
        <h4 className={cx("accounts__name")}>
          <span>{nickname}</span>
        </h4>
        <p className={cx("accounts__username")}>{title}</p>
      </div>
    </Link>
  );
}

AccountItemSidebar.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  nickname: PropTypes.string,
};

export default AccountItemSidebar;
