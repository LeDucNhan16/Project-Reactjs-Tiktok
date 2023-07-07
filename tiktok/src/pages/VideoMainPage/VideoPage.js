import classNames from "classnames/bind";

import Videos6 from "../../assets/Video/4471971206435.mp4";
import Video from "./Video";
import styles from "./VideoPage.module.scss";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function VideoPage() {
  return (
    <div className={cx("wrapper")}>
      <Video
        className="video"
        srcImg={images.images6}
        nameMain="nhacnhalamsieuchill"
        nameSub="nơi đây là nhạc tui làm
        ·
        6-26"
        titleMain="Chưa bao giờ em nghĩ rằng anh là gu của em"
        titleId="#xuhuong #lyrics #capcut #internetlove"
        titleMusic="Chnhngan"
        srcVideo={Videos6}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
    </div>
  );
}

export default VideoPage;
