import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import Image from "../../../Image/Image";

import styles from "./Header.module.scss";
import { ShackleIcon } from "../../Icons/Icons";
import Button from "../../../components/Button/Button";
import images from "../../../assets/Images";

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
                <Image className={cx("imgs")} src={images.images1} />
                <Image className={cx("imgs__sub")} src={images.images2} />
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
                src={images.images3}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images4} />
                <Image className={cx("imgs__sub")} src={images.images15} />
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
                src={images.images13}
              />
            </div>
            <h3>This month</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images14} />
                <Image className={cx("imgs__sub")} src={images.images12} />
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
                src={images.images11}
              />
            </div>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images10} />
                <Image className={cx("imgs__sub")} src={images.images9} />
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
                src={images.images8}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images7} />
                <Image className={cx("imgs__sub")} src={images.images6} />
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
                src={images.images5}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images4} />
                <Image className={cx("imgs__sub")} src={images.images3} />
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
                src={images.images2}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images13} />
                <Image className={cx("imgs__sub")} src={images.images9} />
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
                src={images.images11}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images1} />
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
                <Image className={cx("imgs")} src={images.images3} />
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
                <Image className={cx("imgs")} src={images.images11} />
                <Image className={cx("imgs__sub")} src={images.images13} />
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
                src={images.images1}
              />
            </div>
            <h3>This month</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images2} />
                <Image className={cx("imgs__sub")} src={images.images14} />
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
                src={images.images13}
              />
            </div>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images11} />
                <Image className={cx("imgs__sub")} src={images.images1} />
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
                src={images.images10}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images3} />
                <Image className={cx("imgs__sub")} src={images.images4} />
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
                src={images.images5}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <h3>This Previous</h3>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images15} />
                <Image className={cx("imgs__sub")} src={images.images1} />
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
                src={images.images5}
              />
            </div>
            <div className={cx("context__notifications")}>
              <div className={cx("img")}>
                <Image className={cx("imgs")} src={images.images9} />
                <Image className={cx("imgs__sub")} src={images.images1} />
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
                src={images.images8}
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
                <Image className={cx("imgs")} src={images.images1} />
              </div>
              <div className={cx("Content")}>
                <span className={cx("title")}>PhinFĩBug@!</span>
                <div>
                  <span className={cx("title__sub")}>Follows you . 2-6</span>
                </div>
              </div>
              <Button primaryRed>Follow back</Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={cx("context")}>
            <div className={cx("content__follow__request")}>
              <Image className={cx("img")} src={images.images7} />
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
              <Image className={cx("img")} src={images.images6} />
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
              <Image className={cx("img")} src={images.images5} />
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
              <Image className={cx("img")} src={images.images11} />
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
