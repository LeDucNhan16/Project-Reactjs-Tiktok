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
        alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/12bc505c85e76e0d497b71438351cb33.jpeg?x-expires=1687071600&x-signature=dzg4yw5EMYAZRpkknA%2FD%2Fym%2Brpo%3D"
        title="Bài Học Bổ Ích"
        nickname="baihocboich1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
        alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1bda68d70bda1346469414f965c22805.jpeg?x-expires=1687071600&x-signature=q%2B60Lq9or2UidJcRUJPTXdhDQM8%3D"
        title="Dạy Con Kiểu Chuyên Gia"
        nickname="chuyengiadaycon"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9dba77cbee5b4b214c57117171cc836~c5_100x100.jpeg?x-expires=1687071600&x-signature=TvT70CJURCDQpNsq8gIk2R4G9Ec%3D"
        title="1996Vlog"
        nickname="kyluatcuocsong"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
        alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d32a12c9c38249274a05b4451bddac2~c5_100x100.jpeg?x-expires=1687071600&x-signature=oVU6%2FWOvtB24IxkR%2Bu1aQSJSjjo%3D"
        title="SÁCH HAY KHUYÊN ĐỌC"
        nickname="sachhaykhuyendoc"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@langtu_official_store?lang=en"
        alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d6cced722f180180b908b67b9296d214.jpeg?x-expires=1687071600&x-signature=Lee1x80JttdEnSA%2BjyzVJC98ZgA%3D"
        title="LANGTU Keyboard"
        nickname="langtu_official_store"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@sachtik1?lang=en"
        alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/83896310e0575694dd2a16e942d10855~c5_100x100.jpeg?x-expires=1687244400&x-signature=pdHNcWBB%2BovUPriiSPQnR4X1WWg%3D"
        title="sách 1%"
        nickname="Sachtik1"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devsnevn?lang=en"
        alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/534c3db174d9b6b04c0217159ee8eb03.jpeg?x-expires=1687244400&x-signature=nKcHJJAp%2ByOBZAfzWLfPx6Ibm1c%3D"
        title="devsne"
        nickname="devsnevn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@codewisdom?lang=en"
        alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3202da73a94dbfacbb1d987109562800~c5_100x100.jpeg?x-expires=1687244400&x-signature=cEWNJa8AjmhztUiNJYEfj3%2Fafwc%3D"
        title="codewisdom"
        nickname="CodeWisdom"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f27207214b12974cb533197b09f1f14a~c5_100x100.jpeg?x-expires=1687244400&x-signature=wmEfe2wFusHIeTJ0qTVu1fgNoZg%3D"
        title="devxin.vn"
        nickname="Dev Xịn"
      />
      <AccountItemSidebar
        to="https://www.tiktok.com/@devxin.vn?lang=en"
        alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/485accaa6e1cb10747b98a1ff02ab492.jpeg?x-expires=1687244400&x-signature=ZvUg21nOoDz6SCNlPZjD0KZQB3o%3D"
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
              alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/12bc505c85e76e0d497b71438351cb33.jpeg?x-expires=1687071600&x-signature=dzg4yw5EMYAZRpkknA%2FD%2Fym%2Brpo%3D"
              title="Bài Học Bổ Ích"
              nickname="baihocboich1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@chuyengiadaycon?lang=en"
              alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1bda68d70bda1346469414f965c22805.jpeg?x-expires=1687071600&x-signature=q%2B60Lq9or2UidJcRUJPTXdhDQM8%3D"
              title="Dạy Con Kiểu Chuyên Gia"
              nickname="chuyengiadaycon"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@kyluatcuocsong?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d9dba77cbee5b4b214c57117171cc836~c5_100x100.jpeg?x-expires=1687071600&x-signature=TvT70CJURCDQpNsq8gIk2R4G9Ec%3D"
              title="1996Vlog"
              nickname="kyluatcuocsong"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachhaykhuyendoc?lang=en"
              alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4d32a12c9c38249274a05b4451bddac2~c5_100x100.jpeg?x-expires=1687071600&x-signature=oVU6%2FWOvtB24IxkR%2Bu1aQSJSjjo%3D"
              title="SÁCH HAY KHUYÊN ĐỌC"
              nickname="sachhaykhuyendoc"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@langtu_official_store?lang=en"
              alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d6cced722f180180b908b67b9296d214.jpeg?x-expires=1687071600&x-signature=Lee1x80JttdEnSA%2BjyzVJC98ZgA%3D"
              title="LANGTU Keyboard"
              nickname="langtu_official_store"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@sachtik1?lang=en"
              alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/83896310e0575694dd2a16e942d10855~c5_100x100.jpeg?x-expires=1687244400&x-signature=pdHNcWBB%2BovUPriiSPQnR4X1WWg%3D"
              title="sách 1%"
              nickname="Sachtik1"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devsnevn?lang=en"
              alt="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/534c3db174d9b6b04c0217159ee8eb03.jpeg?x-expires=1687244400&x-signature=nKcHJJAp%2ByOBZAfzWLfPx6Ibm1c%3D"
              title="devsne"
              nickname="devsnevn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@codewisdom?lang=en"
              alt="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3202da73a94dbfacbb1d987109562800~c5_100x100.jpeg?x-expires=1687244400&x-signature=cEWNJa8AjmhztUiNJYEfj3%2Fafwc%3D"
              title="codewisdom"
              nickname="CodeWisdom"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f27207214b12974cb533197b09f1f14a~c5_100x100.jpeg?x-expires=1687244400&x-signature=wmEfe2wFusHIeTJ0qTVu1fgNoZg%3D"
              title="devxin.vn"
              nickname="Dev Xịn"
            />
            <AccountItemSidebar
              to="https://www.tiktok.com/@devxin.vn?lang=en"
              alt="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/485accaa6e1cb10747b98a1ff02ab492.jpeg?x-expires=1687244400&x-signature=ZvUg21nOoDz6SCNlPZjD0KZQB3o%3D"
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
