import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import Image from "../../../Image/Image";

import styles from "./Header.module.scss";
import { ShackleIcon } from "../../Icons/Icons";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(styles);

function Notification() {
  return (
    <div className={cx("wrapper__notification")}>
      <h1>Notification</h1>
      <Tabs className={cx("block")}>
        <TabList className={cx("block__nav")}>
          <Tab className={cx("notifications__nav")}>All activity</Tab>
          <Tab className={cx("notifications__nav")}>Likes</Tab>
          <Tab className={cx("notifications__nav")}>Comments</Tab>
          <Tab className={cx("notifications__nav")}>Mentions and tags</Tab>
          <Tab className={cx("notifications__nav")}>Followers</Tab>
          <Tab className={cx("notifications__nav__end")}>Follow requests</Tab>
        </TabList>

        <TabPanel>
          <div className={cx("context")}>
            <h3>This week</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac187a61fa930fdc770fb164a57c5d0~c5_100x100.jpeg?x-expires=1688122800&x-signature=fLVhcnZ2vg5tIXPVveY9k810JCE%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.2-10
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/3b1a1409cc994b84a877b4eb2e7df04b~tplv-r00ih4996s-1:480:480.jpeg?x-expires=1688061600&x-signature=O9gmPkTCwiiRYvGPGUX1wc7iPVI%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7244782779769520133~c5_100x100.jpeg?x-expires=1688122800&x-signature=do8Ww0d4Y4Y7LN4rqjIJyXa9s0M%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>
                  Quyenn Quyenn , nhanllee and 179 others
                </span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.5d
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
              />
            </div>
            <h3>This month</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0401a0118d3ca29fa6ee46f688c2dce8~c5_100x100.jpeg?x-expires=1688122800&x-signature=UFN7drzdauRY8SQA9sQdc%2BqYDxI%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Phíodfkl</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.6-20
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/oQC5DHDIEDQk1bLbRbePtLkfnr51sCAcnBWVBE~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1688058000&x-signature=zpnPLtcgwhHdAahuvY3LessCPpk%3D"
              />
            </div>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac187a61fa930fdc770fb164a57c5d0~c5_100x100.jpeg?x-expires=1688122800&x-signature=fLVhcnZ2vg5tIXPVveY9k810JCE%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.2-10
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/3b1a1409cc994b84a877b4eb2e7df04b~tplv-r00ih4996s-1:480:480.jpeg?x-expires=1688061600&x-signature=O9gmPkTCwiiRYvGPGUX1wc7iPVI%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1d17b903bac9f8d25afef472862df462~c5_100x100.jpeg?x-expires=1688209200&x-signature=g8SIzKVoylXrHD5RSVsZz4sDOCs%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/52ffe2557b74c60f48a5b96a3be1e485~c5_100x100.jpeg?x-expires=1688209200&x-signature=W73Ms886IdDxu3yxk4HIWGiFNLI%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Vinhtienla@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your thame subro
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shicura
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/52ffe2557b74c60f48a5b96a3be1e485~c5_100x100.jpeg?x-expires=1688209200&x-signature=W73Ms886IdDxu3yxk4HIWGiFNLI%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/313b042921c282866b73a8301bc662a8.jpeg?x-expires=1688209200&x-signature=vkEJlt0GeOIELFaPHjU7SPnNakY%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.2-10
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oMicqDJnkBDYmpyeDqDAUAIPEBR4bnqQ0RQfMy~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1688061600&x-signature=epzS%2Fa0Ho%2FFmwe4vx2t4pXmp478%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7209257346059468826~c5_100x100.jpeg?x-expires=1688209200&x-signature=Hb2tY%2FjzC9dy4WT4snCJXeau8Ks%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Vinhtienla@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your thame subro
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shicura
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oopLcVDQIBgkTJibEX8QTXsfwf6wdCAznBaVBi~tplv-efzqqlc8t1-1:480:480.jpeg?x-expires=1688061600&x-signature=devPhEnjRdVWhX50tRnW8p%2FerP0%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>Follows you . 2-6</span>
                </div>
              </div>
              <Button primaryRed>Follow backs.</Button>
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>Follows you . 2-6</span>
                </div>
              </div>
              <Button primaryRed>Follow backs.</Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <h3>This week</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7244782779769520133~c5_100x100.jpeg?x-expires=1688122800&x-signature=do8Ww0d4Y4Y7LN4rqjIJyXa9s0M%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>
                  Quyenn Quyenn , nhanllee and 179 others
                </span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.5d
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
              />
            </div>
            <h3>This month</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0401a0118d3ca29fa6ee46f688c2dce8~c5_100x100.jpeg?x-expires=1688122800&x-signature=UFN7drzdauRY8SQA9sQdc%2BqYDxI%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Phíodfkl</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.6-20
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/oQC5DHDIEDQk1bLbRbePtLkfnr51sCAcnBWVBE~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1688058000&x-signature=zpnPLtcgwhHdAahuvY3LessCPpk%3D"
              />
            </div>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac187a61fa930fdc770fb164a57c5d0~c5_100x100.jpeg?x-expires=1688122800&x-signature=fLVhcnZ2vg5tIXPVveY9k810JCE%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.2-10
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/3b1a1409cc994b84a877b4eb2e7df04b~tplv-r00ih4996s-1:480:480.jpeg?x-expires=1688061600&x-signature=O9gmPkTCwiiRYvGPGUX1wc7iPVI%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1d17b903bac9f8d25afef472862df462~c5_100x100.jpeg?x-expires=1688209200&x-signature=g8SIzKVoylXrHD5RSVsZz4sDOCs%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/52ffe2557b74c60f48a5b96a3be1e485~c5_100x100.jpeg?x-expires=1688209200&x-signature=W73Ms886IdDxu3yxk4HIWGiFNLI%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Vinhtienla@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your thame subro
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shicura
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/52ffe2557b74c60f48a5b96a3be1e485~c5_100x100.jpeg?x-expires=1688209200&x-signature=W73Ms886IdDxu3yxk4HIWGiFNLI%3D"
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/313b042921c282866b73a8301bc662a8.jpeg?x-expires=1688209200&x-signature=vkEJlt0GeOIELFaPHjU7SPnNakY%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your comment.2-10
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shanghai là ra ái giống hình
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oMicqDJnkBDYmpyeDqDAUAIPEBR4bnqQ0RQfMy~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1688061600&x-signature=epzS%2Fa0Ho%2FFmwe4vx2t4pXmp478%3D"
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7209257346059468826~c5_100x100.jpeg?x-expires=1688209200&x-signature=Hb2tY%2FjzC9dy4WT4snCJXeau8Ks%3D"
                />
                <Image
                  className={cx("imgs__sub")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>Vinhtienla@!</span>
                <div>
                  <span className={cx("title__sub")}>
                    liked your thame subro
                  </span>
                  <span className={cx("title__sub")}>
                    Nhân Lê : lên shopee ghi áo shicura
                  </span>
                </div>
              </div>
              <Image
                className={cx("context__notifications__img")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oopLcVDQIBgkTJibEX8QTXsfwf6wdCAznBaVBi~tplv-efzqqlc8t1-1:480:480.jpeg?x-expires=1688061600&x-signature=devPhEnjRdVWhX50tRnW8p%2FerP0%3D"
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <div className={cx("shackle__icon")}>
              <ShackleIcon />
              <h2>Mentions of You</h2>
              <span>When someone mentions you, you'll see it here</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image
                  className={cx("imgs")}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3bcf982cf9a3b554b760749113fd85aa~c5_100x100.jpeg?x-expires=1688115600&x-signature=IzsPCBh7TFZYhpkLKbIx5xOUFYw%3D"
                />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>Follows you . 2-6</span>
                </div>
              </div>
              <Button primaryRed>Follow backs.</Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <div className={cx("content__follow__request")}>
              <Image
                className={cx("img")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0d4d297268805c7665939265f5f51774~c5_100x100.jpeg?x-expires=1688122800&x-signature=Yt7FwC%2FqKLe1iw%2FjJyEGeuOYOuw%3D"
              />
              <div className={cx("list")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <span className={cx("title__sub")}>Follows you . 2-6</span>
                <div className={cx("list__btn")}>
                  <Button primary>Delete</Button>
                  <Button primaryRed>Accept</Button>
                </div>
              </div>
            </div>
            <div className={cx("content__follow__request")}>
              <Image
                className={cx("img")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/317345067fa70c6192893d87fe69c215.jpeg?x-expires=1688220000&x-signature=ziRdV6LhQfbS%2BQjg8DnCJk51sSM%3D"
              />
              <div className={cx("list")}>
                <span className={cx("title")}>webtech_ali</span>
                <span className={cx("title__sub")}>WebTech_ali</span>
                <div className={cx("list__btn")}>
                  <Button primary>Delete</Button>
                  <Button primaryRed>Accept</Button>
                </div>
              </div>
            </div>
            <div className={cx("content__follow__request")}>
              <Image
                className={cx("img")}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0d4d297268805c7665939265f5f51774~c5_100x100.jpeg?x-expires=1688122800&x-signature=Yt7FwC%2FqKLe1iw%2FjJyEGeuOYOuw%3D"
              />
              <div className={cx("list")}>
                <span className={cx("title")}>WebDev__dude</span>
                <span className={cx("title__sub")}>WebDev</span>
                <div className={cx("list__btn")}>
                  <Button primary>Delete</Button>
                  <Button primaryRed>Accept</Button>
                </div>
              </div>
            </div>
            <div className={cx("content__follow__request")}>
              <Image
                className={cx("img")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/313b042921c282866b73a8301bc662a8.jpeg?x-expires=1688209200&x-signature=vkEJlt0GeOIELFaPHjU7SPnNakY%3D"
              />
              <div className={cx("list")}>
                <span className={cx("title")}>khanhnt204</span>
                <span className={cx("title__sub")}>ꙮ Duy Khánh IT ꙮ</span>
                <div className={cx("list__btn")}>
                  <Button primary>Delete</Button>
                  <Button primaryRed>Accept</Button>
                </div>
              </div>
            </div>
            <div className={cx("content__follow__request")}>
              <Image
                className={cx("img")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ef8dc051be58df3f441903746f8d557~c5_100x100.jpeg?x-expires=1688122800&x-signature=n%2Fi4BsxlKkEZWzShM6H91uRlTFE%3D"
              />
              <div className={cx("list")}>
                <span className={cx("title")}>caobathang</span>
                <span className={cx("title__sub")}>Tuấn Anh Hướng Nghiệp</span>
                <div className={cx("list__btn")}>
                  <Button primary>Delete</Button>
                  <Button primaryRed>Accept</Button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Notification;
