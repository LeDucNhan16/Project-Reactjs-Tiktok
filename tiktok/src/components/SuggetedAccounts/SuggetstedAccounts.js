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
        alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/12bc505c85e76e0d497b71438351cb33.jpeg?x-expires=1687071600&x-signature=dzg4yw5EMYAZRpkknA%2FD%2Fym%2Brpo%3D"
        title="Bài Học Bổ Ích"
        nickname="baihocboich1"
      />
      <AccountItemSidebar
        alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1bda68d70bda1346469414f965c22805.jpeg?x-expires=1687071600&x-signature=q%2B60Lq9or2UidJcRUJPTXdhDQM8%3D"
        title="Dạy Con Kiểu Chuyên Gia"
        nickname="chuyengiadaycon"
      />
      <AccountItemSidebar
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9dba77cbee5b4b214c57117171cc836~c5_100x100.jpeg?x-expires=1687071600&x-signature=TvT70CJURCDQpNsq8gIk2R4G9Ec%3D"
        title="1996Vlog"
        nickname="kyluatcuocsong"
      />
      <AccountItemSidebar
        alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d32a12c9c38249274a05b4451bddac2~c5_100x100.jpeg?x-expires=1687071600&x-signature=oVU6%2FWOvtB24IxkR%2Bu1aQSJSjjo%3D"
        title="SÁCH HAY KHUYÊN ĐỌC"
        nickname="sachhaykhuyendoc"
      />
      <AccountItemSidebar
        alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d6cced722f180180b908b67b9296d214.jpeg?x-expires=1687071600&x-signature=Lee1x80JttdEnSA%2BjyzVJC98ZgA%3D"
        title="LANGTU Keyboard"
        nickname="langtu_official_store"
      />
      <button className={cx("see__more")} onClick={handleSeeMoreSidebar}>
        <span className={cx("see__more__title")}>See More</span>
        {show && (
          <div className={cx("see__more__list")}>
            <AccountItemSidebar
              alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/12bc505c85e76e0d497b71438351cb33.jpeg?x-expires=1687071600&x-signature=dzg4yw5EMYAZRpkknA%2FD%2Fym%2Brpo%3D"
              title="Bài Học Bổ Ích"
              nickname="baihocboich1"
            />
            <AccountItemSidebar
              alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1bda68d70bda1346469414f965c22805.jpeg?x-expires=1687071600&x-signature=q%2B60Lq9or2UidJcRUJPTXdhDQM8%3D"
              title="Dạy Con Kiểu Chuyên Gia"
              nickname="chuyengiadaycon"
            />
            <AccountItemSidebar
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9dba77cbee5b4b214c57117171cc836~c5_100x100.jpeg?x-expires=1687071600&x-signature=TvT70CJURCDQpNsq8gIk2R4G9Ec%3D"
              title="1996Vlog"
              nickname="kyluatcuocsong"
            />
            <AccountItemSidebar
              alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d32a12c9c38249274a05b4451bddac2~c5_100x100.jpeg?x-expires=1687071600&x-signature=oVU6%2FWOvtB24IxkR%2Bu1aQSJSjjo%3D"
              title="SÁCH HAY KHUYÊN ĐỌC"
              nickname="sachhaykhuyendoc"
            />
            <AccountItemSidebar
              alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d6cced722f180180b908b67b9296d214.jpeg?x-expires=1687071600&x-signature=Lee1x80JttdEnSA%2BjyzVJC98ZgA%3D"
              title="LANGTU Keyboard"
              nickname="langtu_official_store"
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
