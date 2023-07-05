import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import HelpSearch from "./HelpSearch";
import HelpDiscover from "./HelpDiscover";
import HelpFeed from "./HelpFeed";
import HelpEmbed from "./HelpEmbed";
import HelpShare from "./HelpShare";

const cx = classNames.bind(styles);

function FeedSrearchShareEmbad() {
  return (
    <div className={cx("context")}>
      <HelpSearch />
      <HelpDiscover />
      <HelpFeed />
      <HelpEmbed />
      <HelpShare />
    </div>
  );
}

export default FeedSrearchShareEmbad;
