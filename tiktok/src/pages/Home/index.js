import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Context from "../../components/Context/Context";
import Video1 from "../../assets/Video/3720204937674537429.mp4";
import Video2 from "../../assets/Video/4459531380904.mp4";
import Video3 from "../../assets/Video/4459531386389.mp4";
import Video4 from "../../assets/Video/4459531393531.mp4";
import Video5 from "../../assets/Video/4471971206435.mp4";
import Video6 from "../../assets/Video/4471971206266.mp4";
import Video7 from "../../assets/Video/4471971205735.mp4";
import Video8 from "../../assets/Video/4471971205051.mp4";
import Video9 from "../../assets/Video/4471971204510.mp4";
import Video10 from "../../assets/Video/4471971202862.mp4";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Context
        srcImg={images.images1}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video1}
        title__active__HeartIcon="202"
        title__HeartIcon="201"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
      <Context
        srcImg={images.images2}
        nameMain="phuthep6688"
        nameSub="Phú Thép 🐲"
        titleMain="Trong 12 con giáp rồng được ví như 1 vị vua thầm lặng "
        titleId="#phuthep6688"
        titleMusic="Phú Thép 🐲"
        srcVideo={Video2}
        title__active__HeartIcon="19.101"
        title__HeartIcon="19.100"
        title__CommentIcon="91"
        title__bookMarkIcon="460"
        title__bookMarkIcon__active="461"
        title__shareIcon="145"
        btn__Following={true}
      />
      <Context
        srcImg={images.images3}
        nameMain="truongxuannguyenn"
        nameSub="Trương Nguyên🧨"
        titleMain="TCũng báo lắm nha😂"
        titleId="@  Vương yêu tiktok rất nhiều - Vương thế thôi"
        titleMusic="Vương yêu tiktok rất nhiều - Vương thế thôi"
        srcVideo={Video3}
        title__active__HeartIcon="1111"
        title__HeartIcon="1110"
        title__CommentIcon="132"
        title__bookMarkIcon="3320"
        title__bookMarkIcon__active="3221"
        title__shareIcon="32"
        btn__Following={true}
      />
      <Context
        srcImg={images.images4}
        nameMain="choinghigiaan"
        nameSub="Chòi nghỉ sân vườn"
        titleMain="Mái nhôm cuốn sang trọng giá bằng nửa tháng lương "
        titleId="#phuthep6688"
        titleMusic="Vua Lồng Tiếng"
        srcVideo={Video4}
        title__active__HeartIcon="1216"
        title__HeartIcon="1215"
        title__CommentIcon="91"
        title__bookMarkIcon="431"
        title__bookMarkIcon__active="432"
        title__shareIcon="32"
        btn__Following={true}
      />
      <Context
        srcImg={images.images5}
        nameMain="choinghigiaan"
        nameSub="Chòi nghỉ sân vườn"
        titleMain="Mái nhôm cuốn sang trọng giá bằng nửa tháng lương "
        titleId="#phuthep6688"
        titleMusic="Vua Lồng Tiếng"
        srcVideo={Video5}
        title__active__HeartIcon="1216"
        title__HeartIcon="1215"
        title__CommentIcon="91"
        title__bookMarkIcon="431"
        title__bookMarkIcon__active="432"
        title__shareIcon="32"
        btn__Following={true}
      />
      <Context
        className="video"
        srcImg={images.images6}
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
        className="video"
        srcImg={images.images7}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video7}
        title__active__HeartIcon="935"
        title__HeartIcon="934"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
      <Context
        className="video"
        srcImg={images.images8}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video8}
        title__active__HeartIcon="999"
        title__HeartIcon="998"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
      <Context
        className="video"
        srcImg={images.images9}
        nameMain="zahu1a"
        nameSub="zuubb . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuong"
        titleMusic="Cô nàng AI"
        srcVideo={Video9}
        title__active__HeartIcon="2002"
        title__HeartIcon="2001"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
      <Context
        className="video"
        srcImg={images.images10}
        nameMain="nhanlee"
        nameSub="nhanlees . 1d ago"
        titleMain="Hey Siri~~~"
        titleId="#xuhuongTrend"
        titleMusic="Cô nàng AI"
        srcVideo={Video10}
        title__active__HeartIcon="202"
        title__HeartIcon="201"
        title__CommentIcon="1324"
        title__bookMarkIcon="295"
        title__bookMarkIcon__active="294"
        title__shareIcon="56"
        btn__Following={true}
      />
    </div>
  );
}

export default Home;
