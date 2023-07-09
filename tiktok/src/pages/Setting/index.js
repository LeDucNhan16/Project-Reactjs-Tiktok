/* eslint-disable react/jsx-pascal-case */
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Setting.module.scss";
import {
  BackIcon,
  BellIcon,
  DeleteIcon,
  NextIcon,
  NextUpIcon,
  PrivacyIcon,
  SquareHouseIcon,
  UserIcon,
} from "../../Layouts/Icons/Icons";
import config from "../../config/index";
import Button from "../../components/Button/Button";
import NavAccounts from "./Nav__Accounts";
import Nav__Date from "./Nav__Date";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function Setting() {
  const [showDelete, setShowDelete] = useState(false);
  const [showBlocked, setShowBlocked] = useState(false);
  const [showDownloadData, setShowDownloadData] = useState(false);
  const [showPersonalAccount, setShowPersonalAccount] = useState(false);

  const handleShowDelete = () => {
    setShowDelete(true);
  };
  const handleMountDelete = () => {
    setShowDelete(false);
  };

  const handleShowBlocked = () => {
    setShowBlocked(true);
  };
  const handleMountBlocked = () => {
    setShowBlocked(false);
  };

  const handleShowDownloadData = () => {
    setShowDownloadData(true);
  };
  const handleMountDownloadData = () => {
    setShowDownloadData(false);
  };
  const handleShowandMountPersonalAccount = () => {
    setShowPersonalAccount(!showPersonalAccount);
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("wrapperSub")}>
          <Link to={config.routers.Home}>
            <BackIcon className={cx("icon__back")} />
          </Link>
          <div className={cx("setting__nav")}>
            <NavLink
              to="http://localhost:3000/setting/"
              className={cx("setting__nav__items")}
            >
              <UserIcon className={cx("icon")} />
              <span>Manage account</span>
            </NavLink>
            <NavLink
              to="http://localhost:3000/setting/#account1"
              className={cx("setting__nav__items")}
            >
              <PrivacyIcon className={cx("icon")} />
              <span>Privacy</span>
            </NavLink>
            <NavLink
              to="http://localhost:3000/setting/#account2"
              className={cx("setting__nav__items")}
            >
              <BellIcon className={cx("icon")} />
              <span>Manage account</span>
            </NavLink>
            <NavLink
              to="http://localhost:3000/setting/#manage"
              className={cx("setting__nav__items")}
            >
              <SquareHouseIcon className={cx("icon")} />
              <span>Manage account</span>
            </NavLink>
          </div>
          <div className={cx("container")}>
            <div className={cx("container__blocks")}>
              <h2>Manage account</h2>
              <h4>Account control</h4>
              <div className={cx("interact")}>
                <span>Delete account</span>
                <button onClick={handleShowDelete}>
                  <Link>Delete</Link>
                </button>
              </div>
            </div>
            <div className={cx("container__blocks")}>
              <h2>Privacy</h2>
              <h4>Discoverability</h4>
              <div className={cx("interact")}>
                <span>
                  Private account
                  <p>
                    With a private account, only users you approve can follow
                    you and watch your videos. Your existing followers won't be
                    affected.
                  </p>
                </span>
              </div>
              <div
                onClick={handleShowBlocked}
                className={cx("interact", "current")}
              >
                <span>Blocked accounts</span>
                <NextIcon className={cx("next__icon")} />
              </div>
              <h4>Data</h4>
              <div
                onClick={handleShowDownloadData}
                className={cx("interact", "current")}
              >
                <span>
                  Private account
                  <p>Get copy of your Tiktok Data</p>
                </span>
                <NextIcon className={cx("next__icon")} />
              </div>
            </div>
            <div className={cx("container__blocks")}>
              <h2>Push notifications</h2>
              <h4>Desktop notifications</h4>
              <div className={cx("interact")}>
                <span>
                  Allow in browser
                  <p>
                    Stay on top of notifications for likes, comments, the latest
                    videos, and more on desktop. You can turn them off anytime.
                  </p>
                </span>
              </div>
              <div className={cx("interact")}>
                <span>
                  Interactions
                  <p>
                    Your preferences will be synced automatically to the TikTok
                    app.
                  </p>
                </span>
              </div>
              <div
                onClick={handleShowandMountPersonalAccount}
                className={cx("interact", "cursor__pointer")}
              >
                <span>
                  Private account
                  <p>Likes, comments, new followers, mentions and tags</p>
                </span>
                <NextUpIcon className={cx("next__icon")} />
              </div>
              {showPersonalAccount && (
                <div className={cx("personal__account")}>
                  <div className={cx("personal__account__block")}>
                    <h4>Likes</h4>
                  </div>
                  <div className={cx("personal__account__block")}>
                    <h4>Comments</h4>
                  </div>
                  <div className={cx("personal__account__block")}>
                    <h4>New followers</h4>
                  </div>
                  <div className={cx("personal__account__block")}>
                    <h4>Mentions and tags</h4>
                  </div>
                </div>
              )}
            </div>
            <div className={cx("container__blocks")}>
              <h2>Business account</h2>
              <h4>Business account</h4>
              <div className={cx("interact")}>
                <p>
                  Access marketing tools & exclusive features through your
                  business account to better connect with viewers.
                </p>
              </div>
            </div>
          </div>

          {showBlocked && (
            <div className={cx("container__sub")}>
              <h2 onClick={handleMountBlocked}>
                <BackIcon className={cx("icon__back")} /> Blocked accounts
              </h2>
              <NavAccounts
                title="xiao.chao.meng"
                src={images.images1}
                seeMore="Video: 97 Followers : 213213"
                titleSub="
              https://www.youtube.com/@xiao_chao_meng"
              />
              <NavAccounts
                title="aniviaBr5"
                src={images.images2}
                seeMore="Video: 324 Followers : 3213"
                titleSub="Main Anivia SP vui là chính . Thích Mô hình"
              />
              <NavAccounts
                title="hoazed_neverdie"
                src={images.images3}
                seeMore="Video: 27 Followers : 6553"
                titleSub="
              https://www.youtube.com/@x23o_chao_meng"
              />
              <NavAccounts
                title="thanhgrakmonter"
                src={images.images4}
                seeMore="Video: 24 Followers : 34213"
                titleSub="—————-ANWIR—————-"
              />
              <NavAccounts
                title="xiem_123"
                src={images.images5}
                seeMore="Video: 57 Followers : 3683"
              />
              <NavAccounts
                title="xiaochanggnae"
                src={images.images6}
                seeMore="Video: 97 Followers : 213213"
                titleSub="Contact work : 0922948640"
              />
              <NavAccounts
                title="bacthaysongam"
                src={images.images7}
                seeMore="Video: 97 Followers : 63700"
                titleSub="Clips of Legue Of legends
              👇Edit 👇
              contact :tuyenbnbn12@gmail.com"
              />
              <NavAccounts
                title="bestsongamday"
                src={images.images8}
                seeMore="Video: 97 Followers : 3214"
                titleSub="Contact work : 980747828"
              />
              <NavAccounts
                title="anlyboutique"
                src={images.images9}
                seeMore="Video: 4 Followers : 23"
                titleSub="Hàng si tuyển cao cấp, chất nhất, mẫu mã đa dạng, sỉ lẻ z.a.l.o: 0972359990"
              />
              <NavAccounts
                title="tucoi923"
                src={images.images10}
                seeMore="Video: 3 Followers : 421"
                titleSub="Chttps://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9b5d11e782c0ea89e61fd6519d73c254~c5_100x100.jpeg?x-expires=1688378400&x-signature=fwf86X%2FpjBMNWqfA%2FWO7p3ULv2U%3D"
              />
              <NavAccounts
                title="nuochoaauth"
                src={images.images11}
                seeMore="Video: 17 Followers : 213"
              />
              <NavAccounts
                title="matakoreafan"
                src={images.images12}
                seeMore="Video: 97 Followers : 213213"
                titleSub="Livestream tại Tiktok 10h tối mỗi ngày"
              />
            </div>
          )}

          {showDownloadData && (
            <div className={cx("container__sub")}>
              <h2 onClick={handleMountDownloadData}>
                <BackIcon className={cx("icon__back")} />
                Download TikTok data
              </h2>
              <Nav__Date />
            </div>
          )}
        </div>
      </div>
      {showDelete && (
        <div className={cx("block")}>
          <div className={cx("block__delete")}>
            <div className={cx("block__delete__head")}>
              <h2>nhanle1602:delete this account?</h2>
              <button onClick={handleMountDelete}>
                <DeleteIcon className={cx("icon")} />
              </button>
            </div>
            <div className={cx("block__delete__content")}>
              <div className={cx("titles")}>
                <span>Your account will be deactivated for</span>
                <p>30 days </p>
                <span>
                  and won’t be visible to the public. During deactivation, you
                  can reactivate your TikTok account anytime.After Your account
                  will be deactivated for Your account will be deactivated for
                </span>
                <p>30 days </p>
                <span>
                  , your account and data will be deleted permanently.
                </span>
              </div>
              <ul>
                <span>If you delete your account:</span>
                <li>
                  You won’t be able to log in and use any TikTok services with
                  that account
                </li>
                <li>You will lose access to all your videos</li>
                <li>
                  Information that isn’t stored in your account, such as direct
                  messages, may still be visible to others
                </li>
                <li>
                  Information that isn’t stored on TikTok servers, such as
                  drafts, will be removed. You won’t be able to download such
                  information after deleting your account.
                </li>
                <li>
                  You won’t be able to get a refund on any items you purchased
                  or received.
                </li>
                <span>Do you want to continue?</span>
              </ul>
              <div className={cx("block__delete__btn")}>
                <Button onClick={handleMountDelete} largePay>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Setting;
