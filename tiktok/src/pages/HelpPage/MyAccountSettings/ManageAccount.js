import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function ManageAccount() {
  const [showPrivateOrPublic, setShowPrivateOrPublic] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showHackedAccount, setShowHackedAccount] = useState(false);

  const handleShowPrivateOrPublic = () => {
    setShowPrivateOrPublic(!showPrivateOrPublic);
  };
  const handleShowDeleteAccount = () => {
    setShowDeleteAccount(!showDeleteAccount);
  };
  const handleShowHackedAccount = () => {
    setShowHackedAccount(!showHackedAccount);
  };
  return (
    <>
      <h2>Manage Account</h2>

      <div onClick={handleShowPrivateOrPublic} className={cx("context__title")}>
        <h3>How to create an account</h3>
        <ChevronRightIcon />
      </div>
      {showPrivateOrPublic && (
        <ul>
          <li className={cx("context__lists")}>For TikTok Desktop Web：</li>
          <li>1. Click your profile picture on the upper corner.</li>
          <li>2. Select "Settings".</li>
          <li>3. Tap "Privacy".</li>
          <li>
            4. Slide the toggle to the right for private and left for the
            public.
          </li>
          <li className={cx("context__lists")}>For TikTok Mobile Web: </li>
          <li>1. Go to your profile by tapping "Me" icon.</li>
          <li>2. Tap "...", located in the top right corner.</li>
          <li>3. Tap "Privacy".</li>
          <li>
            4. Slide the toggle to the right for private and left for the
            public.
          </li>
          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowDeleteAccount} className={cx("context__title")}>
        <h3>Can't create an account with Instagram</h3>
        <ChevronRightIcon />
      </div>
      {showDeleteAccount && (
        <ul>
          <li className={cx("context__lists")}>
            Currently, creating an account with Instagram isn't available. Use
            other methods to create an account.
          </li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowHackedAccount} className={cx("context__title")}>
        <h3>Issues creating an account</h3>
        <ChevronRightIcon />
      </div>
      {showHackedAccount && (
        <ul>
          <li className={cx("context__lists")}>
            If you can't create an account, please refresh the page and try
            again later.
          </li>

          <li className={cx("context__lists")}>
            If you got back to your old account after signing up, you may
            accidentally use the same login method of your old account. Please
            try another login method.
          </li>

          <li className={cx("context__lists")}>
            Still need help? Please send us feedback with the following
            information:
          </li>
          <li>1. The method you choose to sign up</li>
          <li>2. A screenshot of the error message.</li>
          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}
    </>
  );
}

export default ManageAccount;
