import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./Setting.module.scss";
import Button from "../../components/Button/Button";
import Image from "../../Image/Image";

const cx = classNames.bind(styles);

function NavAccounts({ src, title, titleSub, seeMore }) {
  return (
    <div className={cx("container__sub__items")}>
      <Image src={src} />
      <div className={cx("title")}>
        <h3>{title}</h3>
        <span>{seeMore}</span>
        <span>{titleSub}</span>
      </div>
      <Button primaryActive>Unblock</Button>
    </div>
  );
}

NavAccounts.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  seeMore: PropTypes.string,
  titleSub: PropTypes.string,
};

export default NavAccounts;
