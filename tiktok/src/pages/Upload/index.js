import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./Upload.module.scss";
import Image from "../../Image/Image";
import { Link } from "react-router-dom";
import { NextUpIcon } from "../../Layouts/Icons/Icons";

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
      <footer className={cx("footer")}>
        <div className={cx("footer__head")}>
          <Image
            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
            title="TikTok"
          />
          <Image
            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
            title="TikTok"
          />
          <div className={cx("interact")}>
            <div className={cx("interact__items")}>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="https://www.tiktok.com/about?lang=en">About</Link>
                </li>
                <li>
                  <Link to="https://newsroom.tiktok.com/vi-vn/">Newsroom</Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/about/contact?lang=en">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="https://careers.tiktok.com/">Careers</Link>
                </li>
                <li>
                  <Link to="https://www.bytedance.com/">ByteDance</Link>
                </li>
              </ul>
            </div>
            <div className={cx("interact__items")}>
              <h4>Programs</h4>
              <ul>
                <li>
                  <Link to="https://www.tiktok.com/forgood">
                    TikTok for Good
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/business/vi?attr_source=tt_official_site&attr_medium=tt_official_site_guidance&refer=tiktok_web&tt4b_lang_redirect=1">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link to="https://developers.tiktok.com/?refer=tiktok_web">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/tiktok-rewards/eligibility/">
                    TikTok Rewards
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/embed">TikTok Embeds</Link>
                </li>
              </ul>
            </div>
            <div className={cx("interact__items")}>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="https://support.tiktok.com/en">Help Center</Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/safety/en/">
                    Safety Center
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/creators/creator-portal/en-us/">
                    Creator Portal
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/community-guidelines/en/">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/transparency">
                    Transparency
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/accessibility/">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("interact__items")}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="https://www.tiktok.com/legal/page/row/terms-of-service/en">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="https://www.tiktok.com/legal/page/row/privacy-policy/en">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("footer__end")}>
          {/* Using a wrapper  <span> tag around the reference element solves this by creating a new parentNode context.  */}
          <span>
            <Tippy
              interactive
              hideOnClick={false}
              delay={[0, 500]}
              render={(attrs) => (
                <div className={cx("block")} tabIndex="1" {...attrs}>
                  <ul className={cx("language__items")}>
                    <li>Tiếng Việt</li>
                    <li>"English"</li>
                    <li>"cebuano"</li>
                    <li>"Filipino"</li>
                    <li>"বাঙ্গালি (ভারত)"</li>
                    <li>"Čeština (Česká )"</li>
                    <li>"Ελληνικά (Ελλάδα)"</li>
                    <li>"Magyar (Magyarorsrrszág)"</li>
                    <li>"Bahasa Indonesia "</li>
                    <li>"Português (Brasil)"</li>
                    <li>"Tiếng việt"</li>
                    <li>"English"</li>
                    <li>"cebuano"</li>
                    <li>"Filipino"</li>
                    <li>"বাঙ্গালি (ভারত)"</li>
                    <li>"Čeština (Česká )"</li>
                    <li>"Ελληνικά (Ελλάδα)"</li>
                    <li>"Magyar (Magyarorag)"</li>
                    <li>"Bahasa Indonesia "</li>
                    <li>"Português (Brasil)"</li>
                    <li>"Tiếng việt"</li>
                    <li>"English"</li>
                    <li>"cebuano"</li>
                    <li>"Filipino"</li>
                    <li>"বাঙ্গালি (ভারত)"</li>
                    <li>"Čeština (Česká)"</li>
                    <li>"Ελληνικά (Ελλάδα)"</li>
                    <li>"Magyar (Magyarorág)"</li>
                    <li>"Bahasa Indonesia "</li>
                    <li>"Português (Brasil)"</li>
                    <li>"Filipino"</li>
                    <li>"বাঙ্গালি (ভারত)"</li>
                    <li>"Čeština (Česká )"</li>
                    <li>"Ελληνικά (Ελλάδα)"</li>
                    <li>"Magyar (Magyarorsg)"</li>
                    <li>"Bahasa Indonesia "</li>
                    <li>"Português (Brasil)"</li>
                    <li>"Tiếng việt"</li>
                    <li>"English"</li>
                    <li>"cebuano"</li>
                    <li>"Filipino"</li>
                    <li>"বাঙ্গালি (ভারত)"</li>
                    <li>"Čeština (Česká)"</li>
                    <li>"Ελληνικά (Ελλάδα)"</li>
                  </ul>
                </div>
              )}
            >
              <button className={cx("footer__end__btn")}>
                <span>English</span>{" "}
                <span>
                  <NextUpIcon />
                </span>
              </button>
            </Tippy>
          </span>
          <span>NhanLe</span>
        </div>
      </footer>
    </div>
  );
}

export default Upload;
