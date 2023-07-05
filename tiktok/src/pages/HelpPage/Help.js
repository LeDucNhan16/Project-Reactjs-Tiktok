import classNames from "classnames/bind";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";

import styles from "./Help.module.scss";
import { ChevronRightIcon } from "../../Layouts/Icons/Icons";
import Button from "../../components/Button/Button";
import SelectAtopicPage from "./SelectATopicPage";
import Footer from "../FooterPage/Footer";
import MyAccountSettings from "./MyAccountSettings";
import CreatorTools from "./CreatorTools";
import VideoAndSound from "./VideoAndSound";
import InteractPage from "./Follow.Like.Comment/InteractPage";
import NotificationPage from "./Notifications.Messages/NotificationPage";
import Live from "./Live/Live";
import AbuseReport from "./AbuseReport";
import Balance from "./Balance/Balance";
import Image from "../../Image/Image";
import images from "../../assets/Images";

const cx = classNames.bind(styles);

function HelpPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <h1>Feedback and help</h1>
        <Tabs className={cx("main__nav")}>
          <TabList className={cx("main__nav__items")}>
            <Tab className={cx("title__main")}>
              <h3>SELECT A TOPIC</h3>
            </Tab>
            <Tab className={cx("directional")}>
              <span>Suggestion</span>
            </Tab>
            <Tab className={cx("directional")}>
              <span>My Account & Settings</span> <ChevronRightIcon />
            </Tab>

            <Tab className={cx("directional")}>
              <span>Creator tools</span> <ChevronRightIcon />
            </Tab>

            <Tab className={cx("directional")}>
              <span>Video and Sound</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>Follow/Like/Comment</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>Notifications/messages</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>LIVE</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>Abuse Report</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>TikTok Balance</span> <ChevronRightIcon />
            </Tab>
            <Tab className={cx("directional")}>
              <span>Not Responding/Lagging/Other</span>
            </Tab>

            <Tab className={cx("directional")}>
              <span>Report a problem</span>
            </Tab>
          </TabList>

          <TabPanel>
            <SelectAtopicPage />
          </TabPanel>
          {/*  */}
          <TabPanel>
            <div className={cx("context")}>
              <h2>Suggestion</h2>

              <ul>
                <li>
                  Thank you for sharing your suggestions and feedback! We
                  appreciate your help keeping TikTok safe and fun.
                </li>

                <div className={cx("context__btn")}>
                  <h3>Is your problem resolved?</h3>
                  <div>
                    <Button small>Yes</Button>
                    <Button small>no</Button>
                  </div>
                </div>
              </ul>
            </div>
          </TabPanel>
          {/* My Account & Settings */}
          <TabPanel>
            <MyAccountSettings />
          </TabPanel>

          {/* Creator tools */}
          <TabPanel>
            <CreatorTools />
          </TabPanel>

          {/* Feed/Search/Share/Embed */}
          <TabPanel>
            <VideoAndSound />
          </TabPanel>
          {/* Follow/Like/Comment */}
          <TabPanel>
            <InteractPage />
          </TabPanel>

          {/* Notifications/messages */}
          <TabPanel>
            <NotificationPage />
          </TabPanel>

          {/* LIVE */}
          <TabPanel>
            <Live />
          </TabPanel>
          {/* Abuse Report */}
          <TabPanel>
            <AbuseReport />
          </TabPanel>
          {/* TikTok Balance */}
          <TabPanel>
            <Balance />
          </TabPanel>
          {/* Not Responding/Lagging/Other */}
          <TabPanel>
            <div className={cx("context")}>
              <h2>Not Responding/Lagging/Other</h2>

              <ul>
                <li className={cx("context__lists")}>
                  Try the following steps:{" "}
                </li>

                <li className={cx("context__lists")}>
                  For TikTok Desktop Web:
                </li>
                <li>- Refresh the page</li>
                <li>- Restart the browser</li>

                <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
                <li>- Switch between Wi-Fi and mobile data</li>
                <li>- Refresh the page</li>
                <li>- Restart the browser</li>
                <li>- Restart your device</li>

                <li className={cx("context__lists")}>Still not working?</li>
                <li>
                  Tap "Still have problem" below and provide more details and
                  screenshots of the problem.
                </li>

                <div className={cx("context__btn")}>
                  <h3>Is your problem resolved?</h3>
                  <div>
                    <Button small>Yes</Button>
                    <Button small>no</Button>
                  </div>
                </div>
              </ul>
            </div>
          </TabPanel>
          {/* Report a problem */}
          <TabPanel>
            <div className={cx("context")}>
              <h2>Your feedback</h2>

              <h4>Tell us your feedback</h4>
              <input placeholder="Please provide as much detail as possible" />
              <h4>Upload supporting media</h4>
              <div className={cx("btn")}>
                <Button className={cx("btn__submit")}>Submit</Button>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className={cx("download__web")}>
        <h1>Download now</h1>
        <div className={cx("download__web__logo")}>
          <Button>
            <Image className={cx("img")} src={images.imagesLogo1} />
          </Button>
          <Button
            href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=zh-hk&gl=hk&rtc=1"
            target="_blank"
          >
            <Image className={cx("img")} src={images.imagesLogo2} />
          </Button>
          <Button
            href="https://apps.apple.com/MY/app/id1235601864?mt=8"
            target="_blank"
          >
            <Image className={cx("img")} src={images.imagesLogo3} />
          </Button>
          <Button href="https://www.amazon.com/dp/B07KR1RJL2/" target="_blank">
            <Image className={cx("img")} src={images.imagesLogo4} />
          </Button>
          <Button
            href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DKA54toGBoGwQqgrrHTIAKQ"
            target="_blank"
          >
            <Image className={cx("img")} src={images.imagesLogo5} />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HelpPage;
