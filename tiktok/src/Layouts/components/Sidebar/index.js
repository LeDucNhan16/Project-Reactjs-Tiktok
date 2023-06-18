import classNames from "classnames/bind";
import config from "../../../config";
import styles from "./Silebar.module.scss";
import Menu from "./Menu/Menu";
import { MenuItems } from "./Menu";
import {
  CameraIcon,
  CameraActiveIcon,
  DiscoveryIcon,
  DiscoveryActiveIcon,
  HomeIcon,
  HomeActiveIcon,
  UsersIcon,
  UsersActiveIcon,
} from "../../Icons/Icons";
import SuggestedAccountItem from "../../../components/SuggetedAccounts/SuggetstedAccounts";
import Footer from "./FooterSidebar/Footer";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItems
          to={config.routers.Home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
          title="For You"
        />
        <MenuItems
          to={config.routers.Following}
          icon={<UsersIcon />}
          activeIcon={<UsersActiveIcon />}
          title="Following"
        />
        <MenuItems
          to={config.routers.Discovery}
          icon={<DiscoveryIcon />}
          activeIcon={<DiscoveryActiveIcon />}
          title="Explore "
        />
        <MenuItems
          to={config.routers.Live}
          icon={<CameraIcon />}
          activeIcon={<CameraActiveIcon />}
          title="Live"
        />
      </Menu>
      <Menu>
        <SuggestedAccountItem label="Following accounts" />
      </Menu>
      <Menu>
        <Footer />
      </Menu>
    </aside>
  );
}

export default Sidebar;
