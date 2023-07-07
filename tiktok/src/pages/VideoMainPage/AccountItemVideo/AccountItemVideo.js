import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountItemVideo.module.scss";
import { SearchIcon } from "../../../Layouts/Icons/Icons";

const cx = classNames.bind(styles);

function AccountItemVideo({ data }) {
  return (
    <Link to={`/${data.nickname}`} className={cx("wrapper")}>
      <SearchIcon />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>

          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
      </div>
    </Link>
  );
}

AccountItemVideo.propTypes = {
  data: PropTypes.object,
};

export default AccountItemVideo;
