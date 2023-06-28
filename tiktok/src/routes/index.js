import config from "../config";
import { HeaderOnly } from "../Layouts";
import Home from "../pages/Home/index.js";
import Following from "../pages/Following/index.js";
import Live from "../pages/Live/index.js";
import Profile from "../pages/Profile/index.js";
import Upload from "../pages/Upload/index.js";
import Search from "../pages/Search/index.js";
import Discovery from "../pages/Discovery";
import Coin from "../pages/Coin";
import Setting from "../pages/Setting";
import Message from "../pages/Message";

//
const publicRoutes = [
  { path: config.routers.Home, component: Home },
  { path: config.routers.Following, component: Following },
  { path: config.routers.Discovery, component: Discovery },
  { path: config.routers.Live, component: Live },
  { path: config.routers.Profile, component: Profile },
  { path: config.routers.Search, component: Search, layout: null },
  { path: config.routers.Upload, component: Upload, layout: HeaderOnly },
  { path: config.routers.Coin, component: Coin, layout: HeaderOnly },
  {
    path: config.routers.Setting,
    component: Setting,
    layout: HeaderOnly,
  },
  {
    path: config.routers.Message,
    component: Message,
    layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
