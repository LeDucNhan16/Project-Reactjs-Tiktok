import classNames from "classnames/bind";

import config from "../../../config";
import styles from "./Silebar.module.scss";
import Menu from "./Menu/Menu";
import { MenuItems } from "./Menu";
import {
  IconCamera,
  IconCameraActive,
  IconDiscovery,
  IconDiscoveryActive,
  IconHome,
  IconHomeActive,
  IconUsers,
  IconUsersActive,
} from "../../Icons/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItems
          to={config.routers.Home}
          icon={<IconHome />}
          activeIcon={<IconHomeActive />}
          title="For You"
        />
        <MenuItems
          to={config.routers.Following}
          icon={<IconUsers />}
          activeIcon={<IconUsersActive />}
          title="Are Following"
        />
        <MenuItems
          to={config.routers.Discovery}
          icon={<IconDiscovery />}
          activeIcon={<IconDiscoveryActive />}
          title="Discover "
        />
        <MenuItems
          to={config.routers.Live}
          icon={<IconCamera />}
          activeIcon={<IconCameraActive />}
          title="Live"
        />
      </Menu>
    </aside>
  );
}

export default Sidebar;
