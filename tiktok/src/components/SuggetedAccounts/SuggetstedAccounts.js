import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggetstedAccount.module.scss";
import AccountItemSidebar from "./AccountItems";
import { useState } from "react";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function SuggestedAccountItem({ label }) {
  const [show, setShow] = useState(false);

  const handleSeeMoreSidebar = () => {
    setShow(!show);
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("username__list")}>{label}</p>
      <AccountItemSidebar
        to="https://www.tiktok.com/@baihoctusach1?lang=en"
        alt={images.images1}
        title="Bài Học Bổ Ích"
        nickname="baihocboich1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
        alt={images.images2}
        title="Dạy Con Kiểu Chuyên Gia"
        nickname="chuyengiadaycon"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
        alt={images.images3}
        title="1996Vlog"
        nickname="kyluatcuocsong"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
        alt={images.images4}
        title="SÁCH HAY KHUYÊN ĐỌC"
        nickname="sachhaykhuyendoc"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@langtu_official_store?lang=en"
        alt={images.images5}
        title="LANGTU Keyboard"
        nickname="langtu_official_store"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachtik1?lang=en"
        alt={images.images6}
        title="sách 1%"
        nickname="Sachtik1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devsnevn?lang=en"
        alt={images.images7}
        title="devsne"
        nickname="devsnevn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@codewisdom?lang=en"
        alt={images.images8}
        title="codewisdom"
        nickname="CodeWisdom"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt={images.images9}
        title="devxin.vn"
        nickname="Dev Xịn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt={images.images10}
        title="itshirt_dev"
        nickname="< ITShirt.dev />"
      />
      <button className={cx("see__more")}>
        <span className={cx("see__more__title")} onClick={handleSeeMoreSidebar}>
          See More
        </span>
        {show && (
          <div className={cx("see__more__list")}>
            <AccountItemSidebar
              to="https://www.tiktok.com/@baihoctusach1?lang=en"
              alt={images.images11}
              title="Bài Học Bổ Ích"
              nickname="baihocboich1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
              alt={images.images12}
              title="Dạy Con Kiểu Chuyên Gia"
              nickname="chuyengiadaycon"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
              alt={images.images13}
              title="1996Vlog"
              nickname="kyluatcuocsong"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
              alt={images.images14}
              title="SÁCH HAY KHUYÊN ĐỌC"
              nickname="sachhaykhuyendoc"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@langtu_official_store?lang=en"
              alt={images.images15}
              title="LANGTU Keyboard"
              nickname="langtu_official_store"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachtik1?lang=en"
              alt={images.images1}
              title="sách 1%"
              nickname="Sachtik1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devsnevn?lang=en"
              alt={images.images2}
              title="devsne"
              nickname="devsnevn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@codewisdom?lang=en"
              alt={images.images3}
              title="codewisdom"
              nickname="CodeWisdom"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt={images.images4}
              title="devxin.vn"
              nickname="Dev Xịn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt={images.images5}
              title="itshirt_dev"
              nickname="< ITShirt.dev />"
            />
          </div>
        )}
      </button>
    </div>
  );
}

SuggestedAccountItem.propTypes = {
  label: PropTypes.string,
};

export default SuggestedAccountItem;
