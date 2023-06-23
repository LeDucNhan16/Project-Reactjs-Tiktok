import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SuggetstedAccount.module.scss";
import AccountItemSidebar from "./AccountItems";
import { useState } from "react";

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
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="Bài Học Bổ Ích"
        nickname="baihocboich1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="Dạy Con Kiểu Chuyên Gia"
        nickname="chuyengiadaycon"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="1996Vlog"
        nickname="kyluatcuocsong"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="SÁCH HAY KHUYÊN ĐỌC"
        nickname="sachhaykhuyendoc"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@langtu_official_store?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="LANGTU Keyboard"
        nickname="langtu_official_store"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachtik1?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="sách 1%"
        nickname="Sachtik1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devsnevn?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="devsne"
        nickname="devsnevn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@codewisdom?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="codewisdom"
        nickname="CodeWisdom"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
        title="devxin.vn"
        nickname="Dev Xịn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
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
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="Bài Học Bổ Ích"
              nickname="baihocboich1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="Dạy Con Kiểu Chuyên Gia"
              nickname="chuyengiadaycon"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="1996Vlog"
              nickname="kyluatcuocsong"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="SÁCH HAY KHUYÊN ĐỌC"
              nickname="sachhaykhuyendoc"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@langtu_official_store?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="LANGTU Keyboard"
              nickname="langtu_official_store"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachtik1?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="sách 1%"
              nickname="Sachtik1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devsnevn?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="devsne"
              nickname="devsnevn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@codewisdom?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="codewisdom"
              nickname="CodeWisdom"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
              title="devxin.vn"
              nickname="Dev Xịn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8900539a05dc92fa662a8fd04786d0c6~c5_100x100.jpeg?x-expires=1687604400&x-signature=WwYW0VGSDrfOU6TU5wgtZTBrwwA%3D"
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
