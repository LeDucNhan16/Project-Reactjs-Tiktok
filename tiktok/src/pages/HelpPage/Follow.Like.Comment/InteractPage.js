import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import Follow from "./Follow";
import Like from "./Like";
import Comment from "./Comment";

const cx = classNames.bind(styles);

function InteractPage() {
  return (
    <div className={cx("context")}>
      <Follow />
      <Like />
      <Comment />
    </div>
  );
}

export default InteractPage;
