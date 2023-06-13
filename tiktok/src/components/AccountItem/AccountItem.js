import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountItem.module.scss";
import Image from "../../Image/Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/${data.nickname}`} className={cx("wrapper")}>
      <Image alt={data.full_name} src={data.avatar} className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>

          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <p className={cx("username")}>{data.nickname}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object,
};

export default AccountItem;
