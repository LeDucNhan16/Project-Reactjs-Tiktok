import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/about?lang=vi-VN"
        target="_blank"
      >
        Giới thiệu
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://newsroom.tiktok.com/"
        target="_blank"
      >
        Bảng tin
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/about/contact?lang=vi-VN"
      >
        Liên hệ
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://careers.tiktok.com/"
        target="_blank"
      >
        Sự nghiệp
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.bytedance.com/"
        target="_blank"
      >
        ByteDance
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/forgood"
        target="_blank"
      >
        Quảng cáo
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
      >
        Developers
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://developers.tiktok.com/?refer=tiktok_web"
        target="_blank"
      >
        Minh bạch
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/transparency?lang=vi-VN"
        target="_blank"
      >
        TikTok Rewards
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/tiktok-rewards/vi-VN"
        target="_blank"
      >
        Trợ giúp
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/embed"
        target="_blank"
      >
        An toàn
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://support.tiktok.com/vi"
        target="_blank"
      >
        Quyền riêng tư
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/safety/vi-vn/"
        target="_blank"
      >
        Cổng thông tin Tác giả
      </Link>
      <Link
        className={cx("footer__items")}
        to="https://www.tiktok.com/legal/page/row/terms-of-service/vi-VN"
        target="_blank"
      >
        Hướng dẫn Cộng đồng
      </Link>

      <Tippy
        delay={[0, 200]}
        content="NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK"
        placement="top"
        hideOnClick={false}
      >
        <Link
          className={cx("footer__item_more")}
          to="https://www.tiktok.com/legal/page/global/law-enforcement/vi-VN"
          target="_blank"
        >
          Thêm
        </Link>
      </Tippy>
      <span className={cx("footer__item__end")}>© 2023 NhanLe</span>
    </footer>
  );
}

export default Footer;
