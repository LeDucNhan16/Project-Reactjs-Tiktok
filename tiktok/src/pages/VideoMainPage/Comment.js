import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "../../Image/Image";
import styles from "./VideoPage.module.scss";

import { ArrowBottomIcon } from "../../Layouts/Icons/Icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Comment({
  images,
  name,
  title,
  timeComment,
  moreComment,
  Favourite,
  FavouriteActive,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className={cx("comment__name")}>
      <Image src={images} />
      <div className={cx("title__comment")}>
        <h3>{name}</h3>
        <span>{title}</span>
        <div className={cx("feedback")}>
          <span>{timeComment} ago</span>
          <button className={cx("feedback__btn")}>Reply</button>
        </div>
        <button className={cx("more__feedback")}>
          View more replies ({moreComment}) <ArrowBottomIcon />
        </button>
      </div>
      <div onClick={() => setShow(!show)} className={cx("favourite")}>
        {!show ? (
          <>
            <FontAwesomeIcon className={cx("favourite__icon")} icon={faHeart} />
            <span>{Favourite}</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              className={cx("favourite__icon", "active")}
              icon={faHeart}
            />
            <span>{FavouriteActive}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
