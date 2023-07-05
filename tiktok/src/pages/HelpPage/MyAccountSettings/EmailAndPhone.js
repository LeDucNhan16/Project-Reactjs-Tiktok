import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function EmailAndPhone() {
  const [showErrorPhone, setShowErrorPhone] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [showHaveNotReceived, setShowHaveNotReceived] = useState(false);
  const [showHaveNotReceivedeEmail, setShowHaveNotReceivedEmail] =
    useState(false);

  const handleShowErrorPhone = () => {
    setShowErrorPhone(!showErrorPhone);
  };
  const handleShowChange = () => {
    setShowChange(!showChange);
  };
  const handleShowHaveNotReceived = () => {
    setShowHaveNotReceived(!showHaveNotReceived);
  };
  const handleShowHaveNotReceivedEmail = () => {
    setShowHaveNotReceivedEmail(!showHaveNotReceivedeEmail);
  };
  return (
    <>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div onClick={handleShowErrorPhone} className={cx("context__title")}>
        <h3>Email and phone number</h3>
        <ChevronRightIcon />
      </div>
      {showErrorPhone && (
        <ul>
          <li className={cx("context__lists")}>
            Each phone number can only be associated with one TikTok account. To
            associate your phone number with a new account, change the phone
            number linked to your current account or delete the account.
          </li>
          <li className={cx("context__lists")}>
            The deleted account will be deactivated for 30 days and then removed
            permanently. After that, the phone number can be linked to a new
            account.
          </li>
          <li className={cx("context__lists")}>
            To find the account currently associated with your phone number:
          </li>
          <li>For TikTok Desktop Web:</li>
          <li>1. Click the "Login" icon</li>
          <li>2. Select "Use phone/email/username"</li>
          <li>3. Enter your phone number to log in</li>
          <li className={cx("context__lists")}>From the TikTok app:</li>
          <li>1. Tap "Log in" at the bottom of the page</li>
          <li>2. Select "Use phone/email/username"</li>
          <li>3. Enter your phone number to log in</li>
          <li className={cx("context__lists")}>
            If your phone number is associated with another account:
          </li>
          <li>For TikTok Desktop Web:</li>
          <li>1. When you're logged out, click "Log in" at the top</li>
          <li>2. Click "Sign up"</li>
          <li>3. Click "Use phone or email"</li>
          <li>4. Enter your birthday and phone number</li>
          <li>5. Enter the code sent to your device</li>
          <li>
            6. You'll see the profile picture of the account associated with the
            number. If this is your account, tap "Log in instead"
          </li>
          <li>
            4. Slide the tog7. If this isn't your account, tap "Continue with
            this number"
          </li>
          <li className={cx("context__lists")}>From the TikTok app:</li>
          <li>
            1. When you're logged out, tap "Use phone or email" on the sign in
            screen
          </li>
          <li>1. When you're logged out, click "Log in" at the top</li>
          <li>2. Enter your birthday and phone number</li>
          <li>3. Click "Send code"</li>
          <li>4. Enter the code sent to your device</li>
          <li>
            5. You'll see the profile picture of the account associated with the
            number. If this is your account, tap "Log in instead"
          </li>
          <li>
            6. If this isn't your account, tap "Continue with this number"
          </li>
          <li className={cx("context__lists")}>
            We'll remove the phone number from the other account and associate
            it with the new account. The previous account will be notified that
            the phone number was used to create a new account.
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

      <div onClick={handleShowChange} className={cx("context__title")}>
        <h3>Changing the phone number / email associated with an account</h3>
        <ChevronRightIcon />
      </div>
      {showChange && (
        <ul>
          <li className={cx("context__lists")}>
            Hi, we are sorry for the inconvenience caused. This feature is
            currently only available on the TikTok app.
          </li>
          <li className={cx("context__lists")}>
            To use this feature, please search and download the latest version
            of TikTok via the Apple App Store or Google Play through your phone,
            then follow the steps below:
          </li>
          <li className={cx("context__lists")}>
            1. Go to your profile by tapping "Profile".
          </li>
          <li>2. Tap "☰", located on the top right corner. </li>
          <li>
            3. Select "Settings and privacy" "Manage account" "Phone number" or
            "Email".
          </li>
          <li>
            4. Verify your current phone number/email address to link a new one.
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

      <div onClick={handleShowHaveNotReceived} className={cx("context__title")}>
        <h3>Issues creating an account</h3>
        <ChevronRightIcon />
      </div>
      {showHaveNotReceived && (
        <ul>
          <li className={cx("context__lists")}>
            Please make sure the phone number format is correct.
          </li>

          <li>You need to:</li>
          <li>1. Select the correct country code.</li>
          <li>
            2. Enter your phone number without country code and the prefix 0.
          </li>

          <li className={cx("context__lists")}>
            If you have put in the correct phone number, please restart your
            device and request verification code again.
          </li>
          <li className={cx("context__lists")}>
            Note: One phone number can only be associated with a single account.
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

      <div
        onClick={handleShowHaveNotReceivedEmail}
        className={cx("context__title")}
      >
        <h3>Haven't received the email verification code</h3>
        <ChevronRightIcon />
      </div>
      {showHaveNotReceivedeEmail && (
        <ul>
          <li className={cx("context__lists")}>
            If you don't receive an email verification code after you've entered
            your email address:
          </li>

          <li className={cx("context__lists")}>
            1. Check your email address to make sure it's correct. For example,
            make sure there aren't any typos or spaces.
          </li>

          <li>
            2. Check your email to make sure the code wasn't accidentally sent
            to your spam folder or another folder.
          </li>
          <li>
            3. Make sure your email isn't full. If it is, try deleting some
            emails to free up space. Then you can try to submit your email
            again. Note: An email can only be associated with one account.
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
    </>
  );
}

export default EmailAndPhone;
