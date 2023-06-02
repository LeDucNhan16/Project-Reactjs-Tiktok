import { HeaderOnly } from "../components/Layouts";
import Home from "../pages/Home/index.js";
import Following from "../pages/Following/index.js";
import Profile from "../pages/Profile/index.js";
import Upload from "../pages/Upload/index.js";
import Search from "../pages/Search/index.js";

//
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
