import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import styles from "./Discovery.module.scss";
import {
  BagsIcon,
  BallIcon,
  CarIcon,
  CupOfCoffeeIcon,
  EarthIcon,
  EntertainmentIcon,
  FilmIcon,
  HomeActiveBlackIcon,
  MicroIcon,
  PineTreeIcon,
  UserActiveBlackIcon,
} from "../../Layouts/Icons/Icons";
import ShowVideoImages from "./ShowVideoImages";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function Discovery() {
  return (
    <div className={cx("wrapper")}>
      <Tabs>
        <TabList className={cx("nav")}>
          <Tab className={cx("nav__items")}>
            <MicroIcon className={cx("icon")} /> <span>Dance and Music</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <BallIcon className={cx("icon")} />
            <span> Sports</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <EntertainmentIcon className={cx("icon")} />
            <span> Entertainment</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <FilmIcon className={cx("icon")} />
            <span> Comedy and Drama</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <CarIcon className={cx("icon")} />
            <span> autos</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <BagsIcon className={cx("icon")} />
            <span> Fashion</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <CupOfCoffeeIcon className={cx("icon")} />
            <span> Lifestyle</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <PineTreeIcon className={cx("icon")} />
            <span>Pets and Nature</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <HomeActiveBlackIcon className={cx("icon")} />
            <span> Relationships</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <UserActiveBlackIcon className={cx("icon")} />
            <span> Society</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <EarthIcon className={cx("icon")} />
            <span> Informative</span>
          </Tab>
          <Tab className={cx("nav__items")}>
            <BallIcon className={cx("icon")} />
            <span> InformativeSub</span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images1}
              title="Nhảy hoài mà vẫn quên 1 xíu"
              name="wangdaii_203"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Lại là ổng nữa , 1 cái áo , 1 điệu khảy ghita. 🤪🤪🤪"
              name="hoangvu4793"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Cho em xin số phone đi anh chai Cho em xin số phone đi anh chai "
              name="le12402"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Hát như vạy ai dám lên hát 👍cẩm tiên sốt luôn "
              name="minhluong050186"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Trân trọng và giữ gìn người đàn ông làm mọi thứ để mình được Vui ❤️ "
              name="vochongbanhanjp"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Ngục tù nơi đây tháng ngày sống cảnh lầm than , Vì ngày xưa kia con từng sống kiếp bụi đời "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Cuối cùng chị em tui cùng mặc cùng tone được với nhau (dc: "
              name="tiktokker231"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Người ta nói người phụ nữ đẹp nhất là khi không thuộc về ai nhưng riêng Cỗng thấy người phụ nữ đẹp nhất là khi có một gia đình nhỏ hạnh phúc của riêng mình 🥰 "
              name="phuongku101"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Khi em thấy cô đơn lòng em nhớ ai "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Jollibee mới khai trương cn mới, mặc dù ko mời nhưng ăn xong ra nhảy rất nhiệt huyết mặc cho mẹ đứng cười muốn tắt thở 😂 "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Nguyễn Thị Huyền với cú bứt tốc không tưởng, giành HCV nội dung 400m rào nữ tại SEA Games 32 "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Thủ môn bắt Penalty đỉnh cao nhất trong lịch sử bóng đá !!🥶🦾 "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images15}
              title="Dù nắng hay mưa rèn luyện tập võ là một chiến sĩ cảnh sát cơ động "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k
              "
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("wrapper__sub")}>
            <ShowVideoImages
              img={images.images8}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images9}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images10}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images11}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images12}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images13}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />

            <ShowVideoImages
              img={images.images14}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images15}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images1}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images2}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images3}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images4}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images5}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images6}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
            <ShowVideoImages
              img={images.images7}
              title="Từ 2024 Trái đất sẽ bước qua Vận 9 trong Hạ Nguyên theo phương pháp chia Tam Nguyên Cửu Vận. Thời thế sẽ thay đổi ra sao, ngành gì lên, xuống, chúng ta cần chuẩn bị gì? "
              name="npa18_08"
              imgSub={images.images2}
              heart="66.2k"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Discovery;
