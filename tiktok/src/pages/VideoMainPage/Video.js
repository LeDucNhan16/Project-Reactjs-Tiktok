import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentDots,
  faHeart,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Image from "../../Image/Image";
import styles from "./VideoPage.module.scss";
import Button from "../../components/Button/Button";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  BirdIcon,
  FacebookIcon,
  PhoneIcon,
  PlaneRedIcon,
  ShackleMineIcon,
  TagSyntaxIcon,
} from "../../Layouts/Icons/Icons";
import ShareInformationVideoMain from "./ShareInformationVideoMain/ShareInformationVideoMain";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import images from "../../assets/Images";
import IconComment from "./IconComment";

const cx = classNames.bind(styles);

function Video({
  srcImg,
  srcVideo,
  nameMain,
  nameSub,
  titleId,
  titleMain,
  titleMusic,
  btn__Following = false,
  title__active__HeartIcon,
  title__HeartIcon,
  title__CommentIcon,
  title__bookMarkIcon,
  title__bookMarkIcon__active,
}) {
  const [heart, setHeart] = useState(true);
  const [book, setBook] = useState(false);
  const [follow, setFollow] = useState(true);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef();

  const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState();
    const callbackFunction = (entries) => {
      const [entry] = entries; //const entry = entries[0]
      setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
      return options;
    }, [options]);

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, optionsMemo);
      const currentTarget = targetRef.current;
      if (currentTarget) observer.observe(currentTarget);

      return () => {
        if (currentTarget) observer.unobserve(currentTarget);
      };
    }, [targetRef, optionsMemo]);
    return isVisible;
  };

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const isVisible = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  // Copy

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("");
  }
  return (
    <div className={cx("wrapperSub")}>
      <div className={cx("video__main")}>
        <video
          ref={videoRef}
          onClick={handleVideo}
          src={srcVideo}
          muted
          loop
          className={cx("video__main__video")}
        />
      </div>
      <div className={cx("video")}>
        <div className={cx("video__head")}>
          <Image className={cx("img__video")} alt="img__video" src={srcImg} />
          <div className={cx("video__head__sub")}>
            <span className={cx("name")}>
              <h3> {nameMain}</h3>
              <span className={cx("name__sub")}>{nameSub}</span>
            </span>
          </div>

          {btn__Following && (
            <div
              onClick={() => setFollow(!follow)}
              className={cx("btn__following")}
            >
              {follow ? (
                <Button primary>Follow</Button>
              ) : (
                <Button primaryActive>Following</Button>
              )}
            </div>
          )}
        </div>
        {/* video sub */}
        <div className={cx("video__main__navigation")}>
          <div className={cx("title__wrapper")}>
            <p className={cx("title")}>{titleMain}</p>
            <nav className={cx("title__nav")}>{titleId}</nav>
            <div className={cx("music")}>
              <FontAwesomeIcon icon={faMusic} className={cx("icon")} />
              <span>Nhạc Nền - </span>
              <span className={cx("music__btn")}>{titleMusic}</span>
            </div>
          </div>
          <div className={cx("navigation__sub")}>
            <div className={cx("interact")}>
              <div className={cx("block")} onClick={() => setHeart(!heart)}>
                {heart ? (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon", "icon__active")}
                        icon={faHeart}
                      />
                    </div>
                    <span>{title__active__HeartIcon}</span>
                  </div>
                ) : (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
                    </div>
                    <span>{title__HeartIcon}</span>
                  </div>
                )}
              </div>

              <div className={cx("block")}>
                <div className={cx("block__icon")}>
                  <div className={cx("block__icon__btn")}>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faCommentDots}
                    />
                  </div>
                  <span>{title__CommentIcon}</span>
                </div>
              </div>

              <div className={cx("block")} onClick={() => setBook(!book)}>
                {book ? (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon", "icon__active__book")}
                        icon={faBookmark}
                      />
                    </div>
                    <span>{title__bookMarkIcon}</span>
                  </div>
                ) : (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon")}
                        icon={faBookmark}
                      />
                    </div>
                    <span>{title__bookMarkIcon__active}</span>
                  </div>
                )}
              </div>
            </div>
            {/*  Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}

            {/* navigation share video */}
            <div className={cx("share")}>
              <span>
                <Tippy
                  interactive
                  content="Embed"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <span>
                    <TagSyntaxIcon />
                  </span>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="CopyIcon"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <span>
                    <PlaneRedIcon />
                  </span>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to Facebook"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&display=popup&sdk=joey&u="
                  >
                    <FacebookIcon />
                  </Link>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to WhatsApp"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fwww.tiktok.com%2F%40canh_12x1_cl_ls%2Fvideo%2F7243452450525482245%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7129525144692213249&type=custom_url&app_absent=0"
                  >
                    <PhoneIcon />
                  </Link>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to Twitter"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Frefer_source%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540canh_12x1_cl_ls%252Fvideo%252F7243452450525482245%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7129525144692213249%26text%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540canh_12x1_cl_ls%252Fvideo%252F7243452450525482245%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7129525144692213249"
                  >
                    <BirdIcon />
                  </Link>
                </Tippy>
              </span>

              <span>
                <ShareInformationVideoMain />
              </span>
            </div>
          </div>
          {/* copy Link */}
          <div className={cx("copy")}>
            <form className={cx("copy__form")}>
              <textarea
                ref={textAreaRef}
                defaultValue="http://localhost:3000/videoPage"
              />
            </form>
            {
              /* Logical shortcut for only displaying the 
          button if the copy command exists */
              document.queryCommandSupported("copy") && (
                <div className={cx("copy__btn")}>
                  <button onClick={copyToClipboard}>Copy Link</button>
                  {copySuccess}
                </div>
              )
            }
          </div>

          {/* comment user */}
          <div className={cx("comment")}>
            <Comment
              images={images.images1}
              name="nào hết iu anh thì đổi tên🦦"
              title="ơ kìa anh quay lại hủy diệt tình yêu đi chứ"
              timeComment="13h"
              moreComment="1"
              Favourite="100"
              FavouriteActive="101"
            />
            <Comment
              images={images.images2}
              name="𝓝𝓪 𝓱𝓪𝔂 𝓭𝓸̂̃𝓲👑"
              title="K hề :))) nyc em chờ em đi làm về ngủ xong lúc sau em phát hiện ra anh ấy cũng ntin với 1 em khác"
              timeComment="3h"
              Favourite="123"
              moreComment="3"
              FavouriteActive="124"
            />
            <Comment
              images={images.images3}
              name="Nào hết buồn đổi tên💔"
              title="Vậy chờ tới ngủ quên thì sao mn 😂😂😂😂😂"
              timeComment="16h"
              Favourite="12"
              moreComment="1"
              FavouriteActive="11"
            />
            <Comment
              images={images.images4}
              name="Layla Phạm🐻💞"
              title="anh ta nói tớ đi chơi khuya tớ thấy cũng gần 11h nên nhắn hỏi thăm lo lắng và anh ta ko nhận tn sáng anh nhắn 1 câu anh ngủ quên"
              timeComment="23h"
              Favourite="23"
              moreComment="1"
              FavouriteActive="24"
            />
          </div>
        </div>

        {/* add comment */}
        <div className={cx("add__comment")}>
          <form className={cx("add__comment__from")}>
            <input placeholder="Add conment..." />

            <Tippy
              interactive
              content="@ a user to tag them in your comments"
              delay={[200, 100]}
              placement="top"
              hideOnClick={false}
            >
              <span className={cx("button__iconShackle")}>
                <ShackleMineIcon />
              </span>
            </Tippy>

            <span className={cx("button__icon")}>
              <IconComment />
            </span>
          </form>
          <button className={cx("btn")}>Post</button>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  srcImg: PropTypes.string,
  srcVideo: PropTypes.string,
  nameMain: PropTypes.string,
  nameSub: PropTypes.string,
  titleId: PropTypes.string,
  titleMain: PropTypes.string,
  titleMusic: PropTypes.string,
  btn__Following: PropTypes.bool,
  title__active__HeartIcon: PropTypes.string,
  title__HeartIcon: PropTypes.string,
  title__CommentIcon: PropTypes.string,
  title__bookMarkIcon: PropTypes.string,
  title__shareIcon: PropTypes.string,
  title__bookMarkIcon__active: PropTypes.string,
};

export default Video;
