import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { HeartIcon } from "../../Layouts/Icons/Icons";
import styles from "./Discovery.module.scss";
import Image from "../../Image/Image";

const cx = classNames.bind(styles);

function ShowVideoImages({ src, title, img, name, imgSub, heart }) {
  return (
    <Link src={src} className={cx("block")}>
      <div className={cx("block__img")}>
        <Image className={cx("img")} src={img} />
      </div>
      <div className={cx("block__title")}>
        <span className={cx("title")}>{title}</span>
        <div className={cx("id__name")}>
          <div className="name">
            <img alt="img" src={imgSub} />
            {name}
          </div>
          <div className={cx("favourite")}>
            <HeartIcon />
            <span>{heart}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowVideoImages;
