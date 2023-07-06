import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentDots,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Image from "../../Image/Image";
import styles from "./Context.module.scss";
import Button from "../Button/Button";
import { useState, useEffect, useRef, useMemo } from "react";
import ShareInformation from "../ShareInformation/ShareInformation";

const cx = classNames.bind(styles);

function Context({
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
  title__shareIcon,
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

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <Image className={cx("img__video")} alt="img__video" src={srcImg} />
        <div className={cx("video")}>
          <div className={cx("video__head")}>
            <div className={cx("video__head__sub")}>
              <span className={cx("name")}>
                {nameMain}
                <span className={cx("name__sub")}>{nameSub}</span>
              </span>
              <p className={cx("title")}>{titleMain}</p>
              <nav className={cx("title__nav")}>{titleId}</nav>
              <div className={cx("music")}>
                <span>Nhạc Nền - </span>
                <span className={cx("music__btn")}>{titleMusic}</span>
              </div>
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

          <div className={cx("video__main")}>
            <video
              ref={videoRef}
              onClick={handleVideo}
              src={srcVideo}
              controls
              loop
              className={cx("video__main__video")}
            />
            <div className={cx("video__main__navigation")}>
              <div className={cx("navigation__sub")}>
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
                        <FontAwesomeIcon
                          className={cx("icon")}
                          icon={faHeart}
                        />
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
                {/*  Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}
                <div>
                  <Tippy
                    hideOnClick={false}
                    interactive
                    delay={[0, 500]}
                    placement="top-start"
                    render={(attrs) => (
                      <div className={cx("menu_list")} tabIndex="-1" {...attrs}>
                        <ShareInformation />
                      </div>
                    )}
                  >
                    <div className={cx("block")}>
                      <div className={cx("block__icon")}>
                        <div className={cx("block__icon__btn")}>
                          <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faShare}
                          />
                        </div>
                        <span>{title__shareIcon}</span>
                      </div>
                    </div>
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Context.propTypes = {
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

export default Context;
