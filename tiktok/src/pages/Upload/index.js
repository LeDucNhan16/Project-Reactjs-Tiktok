import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import FooterPage from "../FooterPage/Footer";
import styles from "./Upload.module.scss";

const cx = classNames.bind(styles);

function Upload() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("main__block")}>
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            className={cx("icon__upload")}
          />
          <h3>Select video to upload</h3>
          <ul>
            <li>Or drag and drop a file</li>
            <li>
              Long videos can be split into multiple parts to get more exposure
            </li>
            <li>MP4 or WebM</li>
            <li>720x1280 resolution or higher</li>
            <li>Up to 30 minutes</li>
            <li>Less than 2 GB</li>
          </ul>
          <button className={cx("selectFile__btn")}>Select file</button>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

export default Upload;
