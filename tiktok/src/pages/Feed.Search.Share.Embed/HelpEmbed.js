import classNames from "classnames/bind";
import "react-tabs/style/react-tabs.scss";

import styles from "../HelpPage/Help.module.scss";
import { ChevronRightIcon } from "../../Layouts/Icons/Icons";
import Button from "../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function HelpEmbed() {
  const [showAccountn, setShowAccountn] = useState(false);
  const [showErrorInstagram, setShowErrorInstagram] = useState(false);
  const [showErrorAcountn, setShowErrorAcountn] = useState(false);

  const handleShowAccountn = () => {
    setShowAccountn(!showAccountn);
  };
  const handleShowErrorInstagram = () => {
    setShowErrorInstagram(!showErrorInstagram);
  };
  const handleShowErrorAcountn = () => {
    setShowErrorAcountn(!showErrorAcountn);
  };

  return (
    <>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div onClick={handleShowAccountn} className={cx("context__title")}>
        <h3>How to create an account</h3>
        <ChevronRightIcon />
      </div>
      {showAccountn && (
        <ul>
          <li>To create a TikTok account:</li>
          <li className={cx("context__lists")}>For TikTok Desktop Web：</li>
          <li>
            1. Click the "Login" icon and click "Sign Up" at the bottom of the
            window
          </li>
          <li>
            2. Sign up using your email, phone number, or a social media account
          </li>
          <li>
            3. After signing up, complete your profile and personalize your
            username
          </li>
          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>
            1. Tap the "Me" icon and sign up with your email, phone number, or a
            social media account
          </li>
          <li>
            2. After signing up, complete your profile and personalize your
            username
          </li>
          <li>
            Note: Each email and phone number can only be associated with one
            TikTok account.
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

      <div onClick={handleShowErrorInstagram} className={cx("context__title")}>
        <h3>Can't create an account with Instagram</h3>
        <ChevronRightIcon />
      </div>
      {showErrorInstagram && (
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

      <div onClick={handleShowErrorAcountn} className={cx("context__title")}>
        <h3>Issues creating an account</h3>
        <ChevronRightIcon />
      </div>
      {showErrorAcountn && (
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

export default HelpEmbed;
