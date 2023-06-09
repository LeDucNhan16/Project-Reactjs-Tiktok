import classNames from "classnames/bind";

import styles from "./Following.module.scss";
import Context from "../../components/Context/Context";
import Video1 from "../../assets/Video/4459556844613.mp4";
import Video2 from "../../assets/Video/4459556760151.mp4";
import Video3 from "../../assets/Video/4459552994307.mp4";
import Video4 from "../../assets/Video/4459552988012.mp4";
import Video5 from "../../assets/Video/4459531394711.mp4";
import Video6 from "../../assets/Video/4471971200906.mp4";
import Video7 from "../../assets/Video/4471971202862.mp4";
import Video8 from "../../assets/Video/4471971205051.mp4";
import Video9 from "../../assets/Video/4471971203548.mp4";
import Video10 from "../../assets/Video/4471971204060.mp4";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function Following() {
  return (
    <div className={cx("wrapper")}>
      <Context
        className="video"
        srcImg={images.images15}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video1}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
      />
      <Context
        className="video"
        srcImg={images.images14}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video2}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
      />
      <Context
        className="video"
        srcImg={images.images13}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video3}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
      />
      <Context
        className="video"
        srcImg={images.images12}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video4}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
      />
      <Context
        className="video"
        srcImg={images.images11}
        nameMain="nhanlee"
        nameSub="nhanlees . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuongTrend"
        titleMusic="Cô nàng AI"
        srcVideo={Video5}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
      />
      <Context
        srcImg={images.images10}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video6}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
      <Context
        srcImg={images.images9}
        nameMain="phuthep6688"
        nameSub="Phú Thép 🐲"
        titleMain="Trong 12 con giáp rồng được ví như 1 vị vua thầm lặng "
        titleId="#phuthep6688"
        titleMusic="Phú Thép 🐲"
        srcVideo={Video7}
        title__active__HeartIcon="19.101"
        title__HeartIcon="19.100"
        title__CommentIcon="91"
        title__bookMarkIcon="460"
        title__bookMarkIcon__active="461"
        title__shareIcon="145"
        btn__Following={true}
      />
      <Context
        srcImg={images.images8}
        nameMain="truongxuannguyenn"
        nameSub="Trương Nguyên🧨"
        titleMain="TCũng báo lắm nha😂"
        titleId="@  Vương yêu tiktok rất nhiều - Vương thế thôi"
        titleMusic="Vương yêu tiktok rất nhiều - Vương thế thôi"
        srcVideo={Video8}
        title__active__HeartIcon="1111"
        title__HeartIcon="1112"
        title__CommentIcon="132"
        title__bookMarkIcon="3320"
        title__bookMarkIcon__active="3221"
        title__shareIcon="32"
        btn__Following={true}
      />
      <Context
        srcImg={images.images1}
        nameMain="choinghigiaan"
        nameSub="Chòi nghỉ sân vườn"
        titleMain="Mái nhôm cuốn sang trọng giá bằng nửa tháng lương "
        titleId="#phuthep6688"
        titleMusic="Vua Lồng Tiếng"
        srcVideo={Video9}
        title__active__HeartIcon="1216"
        title__HeartIcon="1215"
        title__CommentIcon="91"
        title__bookMarkIcon="431"
        title__bookMarkIcon__active="432"
        title__shareIcon="32"
        btn__Following={true}
      />
      <Context
        srcImg={images.images2}
        nameMain="Nguyễn Bích Uyển My"
        nameSub="Sangvo34563"
        titleMain="Trong 12 con giáp rồng được ví như 1 vị vua thầm lặng  Vụ đánh ghen ở Trung Văn Hà Nội, đập nát kính ô tô, yêu mí ông bà ghê, vừa cản chị vợ vừa đưa bao tay, mũ bảo hiểm cho chị ấy "
        titleId="#phuthep6688"
        titleMusic="Sangvo34563"
        srcVideo={Video10}
        title__active__HeartIcon="18"
        title__HeartIcon="19"
        title__CommentIcon="12"
        title__bookMarkIcon="212"
        title__bookMarkIcon__active="213"
        title__shareIcon="23"
        btn__Following={true}
      />
    </div>
  );
}

export default Following;
