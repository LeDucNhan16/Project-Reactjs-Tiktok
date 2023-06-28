import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import video from "../../assets/Video/4459531380904.mp4";
import video1 from "../../assets/Video/3720204937674537429.mp4";
import video2 from "../../assets/Video/4459531386389.mp4";
import video3 from "../../assets/Video/4459531393531.mp4";
import video4 from "../../assets/Video/4459556844613.mp4";
import video5 from "../../assets/Video/4459556760151.mp4";
import video6 from "../../assets/Video/4459552994307.mp4";
import video7 from "../../assets/Video/4459552988012.mp4";
import video8 from "../../assets/Video/4459531394711.mp4";
import styles from "./Profile.module.scss";
import Image from "../../Image/Image";
import {
  HugeUserIcon,
  LockActiveIcon,
  LockIcon,
} from "../../Layouts/Icons/Icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("head")}>
        <div className={cx("id__name")}>
          <Image
            className={cx("img")}
            alt="img"
            src="https://tse3.mm.bing.net/th?id=OIP.cLFYh5JgUcvbxNL4oz9WjAHaGF&pid=Api&P=0"
          />
          <div className={cx("title")}>
            <h1>
              nhanle16 <LockIcon />
            </h1>
            <span>Nhân Lê</span>
            <button className={cx("title__btn")}>
              <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
            </button>
          </div>
        </div>
        <div className={cx("id__Name__Sub")}>
          <ul>
            <h4>272</h4>
            <span>Following</span>
          </ul>
          <ul>
            <h4>272</h4>
            <span>Followers</span>
          </ul>
          <ul>
            <h4>272</h4>
            <span>Likes</span>
          </ul>
        </div>
      </div>
      <Tabs className={cx("main")}>
        <TabList className={cx("nav")}>
          <Tab className={cx("nav__items")}>
            <span>
              <LockActiveIcon className={cx("nav__items__icon")} />
              Favorites
            </span>
          </Tab>
          <Tab className={cx("nav__items", "active")}>
            <span>Video</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <span>
              <LockActiveIcon className={cx("nav__items__icon")} />
              Liked
            </span>
          </Tab>
        </TabList>
        <div className={cx("body")}>
          <TabPanel className={cx("context")}>
            <div className={cx("context__block")}>
              <video className={cx("video")} src={video} autoPlay controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video2} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
              <video className={cx("video")} src={video6} controls />
              <video className={cx("video")} src={video7} controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video2} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
              <video className={cx("video")} src={video6} controls />
              <video className={cx("video")} src={video7} controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
            </div>
          </TabPanel>
          <TabPanel className={cx("context")}>
            <HugeUserIcon className={cx("icon__your")} />
            <h2>Upload your first video</h2>
            <span>Your videos will appear here</span>
          </TabPanel>
          <TabPanel className={cx("context")}>
            <div className={cx("context__block")}>
              <video className={cx("video")} autoPlay src={video6} controls />
              <video className={cx("video")} src={video7} controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video2} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
              <video className={cx("video")} src={video6} controls />
              <video className={cx("video")} src={video7} controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video} controls />
              <video className={cx("video")} src={video1} controls />
              <video className={cx("video")} src={video2} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
              <video className={cx("video")} src={video3} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video4} controls />
              <video className={cx("video")} src={video5} controls />
              <video className={cx("video")} src={video8} controls />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default Profile;
