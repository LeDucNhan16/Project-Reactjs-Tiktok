import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function LoginPage() {
  const [showAccountn, setShowAccountn] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showPassWords, setShowPassWords] = useState(false);
  const [showErrorInstagram, setShowErrorInstagram] = useState(false);
  const [showLogOutAuto, setShowLogOutAuto] = useState(false);

  const handleShowAccountn = () => {
    setShowAccountn(!showAccountn);
  };
  const handleShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };
  const handleShowPassWords = () => {
    setShowPassWords(!showPassWords);
  };
  const handleShowErrorInstagram = () => {
    setShowErrorInstagram(!showErrorInstagram);
  };
  const handleShowLogOutAuto = () => {
    setShowLogOutAuto(!showLogOutAuto);
  };

  return (
    <>
      <h2>LogIn</h2>

      <div onClick={handleShowAccountn} className={cx("context__title")}>
        <h3>Suspended account</h3>
        <ChevronRightIcon />
      </div>
      {showAccountn && (
        <ul>
          <li className={cx("context__lists")}>
            TikTok is committed to maintaining a safe and fun experience and
            reserves the right to suspend accounts that violate our Community
            Guidelines. If you feel this decision was made in error, submit an
            appeal to report the problem and provide your username (with the "@"
            handle).
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

      <div onClick={handleShowLogIn} className={cx("context__title")}>
        <h3>How to log in</h3>
        <ChevronRightIcon />
      </div>
      {showLogIn && (
        <ul>
          <li className={cx("context__lists")}>To log into an account:</li>
          <li className={cx("context__lists")}>For TikTok Desktop Web：</li>
          <li>1. Click the "Login" icon on the upper right corner</li>
          <li>2. Select login method</li>
          <li>
            3. Enter your account information or continue with selected login
            method：
          </li>
          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>1. Tap "Me" to go to profile</li>
          <li>2. Tap "Sign up"</li>
          <li>3. Tap "Log in" at the bottom of the page</li>
          <li>4. Select login method</li>
          <li>
            5. Enter your account information or continue with selected login
            method
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

      <div onClick={handleShowPassWords} className={cx("context__title")}>
        <h3>Lost or stolen passwords</h3>
        <ChevronRightIcon />
      </div>
      {showPassWords && (
        <ul>
          <li className={cx("context__lists")}>To reset your password:</li>

          <li className={cx("context__lists")}>For TikTok Desktop Web:</li>

          <li className={cx("context__lists")}>
            Still need help? Please send us feedback with the following
            information:
          </li>
          <li>1. Click your profile picture on the upper corner</li>
          <li>2. Select "Log out"</li>
          <li>3. Click the "Log in" icon on the upper right corner</li>
          <li>4. Select "Use phone/email/username"</li>
          <li>5. Select "Email/Username".</li>
          <li>6. Tap "Forgot password?".</li>
          <li>7. Choose to reset password with your email or phone number.</li>
          <li>8. Follow the reset instructions.</li>

          <li className={cx("context__lists")}>For TikTok Mobile Web:</li>
          <li>1. Tap the "Me" icon.</li>
          <li>2. Tap the "…" on the top corner.</li>
          <li>3. Scroll to the bottom of the page and click "Log out".</li>
          <li>4. Tap the "Me" icon.</li>
          <li>5. Tap "Sign up".</li>
          <li>6. Tap "Log in" at the bottom of the page.</li>
          <li>7. Select "Use phone/email/username".</li>
          <li>8. Select "Email/Username".</li>
          <li>9. Tap "Forgot password?".</li>
          <li>10. Choose to reset password with your email or phone number.</li>
          <li>11. Follow the reset instructions.</li>
          <li className={cx("context__lists")}>
            For users who've joined TikTok using another social media account,
            passwords will need to be reset from that platform.
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
        <h3>Can't log in with Instagram</h3>
        <ChevronRightIcon />
      </div>
      {showErrorInstagram && (
        <ul>
          <li className={cx("context__lists")}>
            Instagram login is no longer supported. Please log in with your
            phone number, email, or other social media account. If you can't log
            in, use the TikTok app to recover your account.
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

      <div onClick={handleShowLogOutAuto} className={cx("context__title")}>
        <h3>Logged out automatically</h3>
        <ChevronRightIcon />
      </div>
      {showLogOutAuto && (
        <ul>
          <li className={cx("context__lists")}>
            New changes to login or active device settings may require users to
            log in again.
          </li>
          <li className={cx("context__lists")}>
            If you've been logged out and haven't authorized any new changes,
            your account may be hacked and security measures need to be taken.
            Reset your password or report your problem to TikTok immediately.
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

      <HelpOther />
    </>
  );
}

export default LoginPage;
