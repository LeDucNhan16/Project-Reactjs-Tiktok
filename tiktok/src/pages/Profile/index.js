import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

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
  ArrowRightIcon,
  DeleteIcon,
  HugeUserIcon,
  LockActiveIcon,
  LockIcon,
} from "../../Layouts/Icons/Icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

import ShareInformation from "../../components/ShareInformation/ShareInformation";

const cx = classNames.bind(styles);

function Profile() {
  const [showSettingMessage, setShowSettingMessage] = useState(false);

  const handleShowSettingMessage = () => {
    setShowSettingMessage(true);
  };

  const handleMountSettingMessage = () => {
    setShowSettingMessage(false);
  };
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
            <button
              onClick={handleShowSettingMessage}
              className={cx("title__btn")}
            >
              <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile
            </button>
          </div>
          {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
          <div>
            <Tippy
              hideOnClick={false}
              interactive
              offset={[20, -10]}
              delay={[0, 500]}
              placement="bottom-end"
              render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                  <ShareInformation />
                </div>
              )}
            >
              <button className={cx("arrow__icon__btn")}>
                <ArrowRightIcon />
              </button>
            </Tippy>
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
      {showSettingMessage && (
        <div className={cx("block")}>
          <div className={cx("block__profile")}>
            <div className={cx("head__profile__setting")}>
              <h1>Edit Profile</h1>
              <button onClick={handleMountSettingMessage}>
                <DeleteIcon className={cx("icon__delete")} />
              </button>
            </div>
            <div className={cx("body__profile__setting")}>
              <div className={cx("context")}>
                <h4>Profile photo</h4>
                <Image
                  className={cx("context__img")}
                  src="https://tse3.mm.bing.net/th?id=OIP.cLFYh5JgUcvbxNL4oz9WjAHaGF&pid=Api&P=0"
                  alt="img"
                />
              </div>
              <div className={cx("context")}>
                <h4>Username</h4>
                <div className={cx("context__sub")}>
                  <input
                    className={cx("input__username")}
                    title="Nhanle1204"
                    placeholder="username"
                  />
                  <span>www.tiktok.com/@nhanle1602</span>
                  <span>
                    Usernames can only contain letters, numbers, underscores,
                    and periods. Changing your username will also change your
                    profile link.
                  </span>
                </div>
              </div>
              <div className={cx("context")}>
                <h4>Name</h4>
                <div className={cx("context__sub")}>
                  <input
                    className={cx("input__username")}
                    title="name"
                    placeholder="Nhanle"
                  />
                  <span>
                    Your nickname can only be changed once every 7 days.
                  </span>
                </div>
              </div>
              <div className={cx("context")}>
                <h4>Bio</h4>
                <div className={cx("context__sub")}>
                  <input
                    className={cx("input__bio")}
                    title="Bio"
                    placeholder="Bio"
                  />
                  <span>0/80</span>
                </div>
              </div>
            </div>
            <div className={cx("block__btn")}>
              <Button onClick={handleMountSettingMessage} primaryActive>
                Cancel
              </Button>
              <Button onClick={handleMountSettingMessage} primaryRed>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
