import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(styles);

function AccountTransferError() {
  return (
    <>
      <h2>SuggestionI can't switch to a Pro or Creator Account</h2>

      <ul>
        <li className={cx("context__lists")}>
          As TikTok evolves, we continue to iterate on the product to ensure the
          best user experience. Throughout the process, we test out new features
          and functionalities.
        </li>

        <li className={cx("context__lists")}>
          We are currently in the process of removing Pro and Creator Accounts
          and offering new creator tool features in the settings of your
          Personal Account. This means you'll have access to advanced creator
          options without having to change to a Pro or Creator Account.
        </li>

        <div className={cx("context__btn")}>
          <h3>Is your problem resolved?</h3>
          <div>
            <Button small>Yes</Button>
            <Button small>no</Button>
          </div>
        </div>
      </ul>
    </>
  );
}

export default AccountTransferError;
