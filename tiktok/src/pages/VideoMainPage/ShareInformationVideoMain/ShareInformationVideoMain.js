import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./ShareInformationVideoMain.module.scss";
import {
  ArrowRightIcon,
  CopyIcon,
  LettersIcon,
  LineIcon,
  LinkedlnLogoIcon,
  PinterestIcon,
  PlaneBlueIcon,
  RedditLogoIcon,
} from "../../../Layouts/Icons/Icons";

const cx = classNames.bind(styles);
function ShareInformationVideoMain() {
  return (
    // Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
    <div>
      <Tippy
        hideOnClick={false}
        interactive
        delay={[100, 400]}
        placement="top-start"
        render={(attrs) => (
          <div className={cx("menu_list")} tabIndex="-1" {...attrs}>
            <div className={cx("wrapper__tippy")}>
              <Link className={cx("wrapper__tippy__items")}>
                <CopyIcon className={cx("share__subIcon")} />
                <span>Send Link</span>
              </Link>
              <Link
                to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540mon_roseee%252Fvideo%252F7240449581362760965%253Fis_from_webapp%253D1%2526sender_device%253Dpc"
                className={cx("wrapper__tippy__items")}
              >
                <LinkedlnLogoIcon className={cx("share__subIcon")} />
                <span>Send to Linkedln</span>
              </Link>
              <Link
                to="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.tiktok.com%2F%40mon_roseee%2Fvideo%2F7240449581362760965%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                className={cx("wrapper__tippy__items")}
              >
                <RedditLogoIcon className={cx("share__subIcon")} />
                <span>Send to Reddit</span>
              </Link>
              <Link
                to="https://t.me/share/url?text=https%3A%2F%2Fwww.tiktok.com%2F%40mon_roseee%2Fvideo%2F7240449581362760965%3Fis_from_webapp%3D1%26sender_device%3Dpc&url=https%3A%2F%2Fwww.tiktok.com%2F%40mon_roseee%2Fvideo%2F7240449581362760965%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                className={cx("wrapper__tippy__items")}
              >
                <PlaneBlueIcon className={cx("share__subIcon")} />
                <span>Send to Telegram</span>
              </Link>
              <Link
                to="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540mon_roseee%252Fvideo%252F7240449581362760965%253Fis_from_webapp%253D1%2526sender_device%253Dpc"
                className={cx("wrapper__tippy__items")}
              >
                <LettersIcon className={cx("share__subIcon")} />
                <span>Send to gmail</span>
              </Link>
              <Link
                to="https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D1446101138%26state%3Dba73d8c09210b7043bc4b04dcb30f5%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Ftext%25253Dhttps%2525253A%2525252F%2525252Fwww.tiktok.com%2525252F%25252540mon_roseee%2525252Fvideo%2525252F7240449581362760965%2525253Fis_from_webapp%2525253D1%25252526sender_device%2525253Dpc%252526url%25253Dhttps%2525253A%2525252F%2525252Fwww.tiktok.com%2525252F%25252540mon_roseee%2525252Fvideo%2525252F7240449581362760965%2525253Fis_from_webapp%2525253D1%25252526sender_device%2525253Dpc%26scope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write&loginChannelId=1446101138&loginState=alMlLDVyes0ry79F3DM5k5#/"
                className={cx("wrapper__tippy__items")}
              >
                <LineIcon className={cx("share__subIcon")} />
                <span>Send to Line</span>
              </Link>
              <Link
                to="https://www.pinterest.com/pin-builder/?desc=https%3A%2F%2Fwww.tiktok.com%2F%40mon_roseee%2Fvideo%2F7240449581362760965%3Fis_from_webapp%3D1%26sender_device%3Dpc&media=https%3A%2F%2Flf16-tiktok-web.ttwstatic.com%2Fobj%2Ftiktok-web-common-sg%2Fmtact%2Fstatic%2Fimages%2Fshare_img.png&method=button&url=https%3A%2F%2Fwww.tiktok.com%2F%40mon_roseee%2Fvideo%2F7240449581362760965%3Fis_from_webapp%3D1%26sender_device%3Dpc"
                className={cx("wrapper__tippy__items")}
              >
                <PinterestIcon className={cx("share__subIcon")} />
                <span>Send to Pinterest</span>
              </Link>
            </div>
          </div>
        )}
      >
        <button>
          <ArrowRightIcon />
        </button>
      </Tippy>
    </div>
  );
}

export default ShareInformationVideoMain;
