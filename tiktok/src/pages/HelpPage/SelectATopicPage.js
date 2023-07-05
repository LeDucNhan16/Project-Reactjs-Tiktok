import classNames from "classnames/bind";
import "react-tabs/style/react-tabs.scss";

import styles from "./Help.module.scss";
import { ChevronRightIcon } from "../../Layouts/Icons/Icons";
import Button from "../../components/Button/Button";
import { useState } from "react";

const cx = classNames.bind(styles);

function SelectAtopicPage() {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [showBugLogIn, setShowBugLogIn] = useState(true);
  const [showBugMonny, setShowBugMonny] = useState(true);

  const handleShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };
  const handleShowPhone = () => {
    setShowPhone(!showPhone);
  };
  const handleShowBugLogin = () => {
    setShowBugLogIn(!showBugLogIn);
  };
  const handleShowBugMonny = () => {
    setShowBugMonny(!showBugMonny);
  };

  return (
    <div className={cx("context")}>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div onClick={handleShowLogIn} className={cx("context__title")}>
        <h3>How to log in</h3>
        <ChevronRightIcon />
      </div>
      {!showLogIn && (
        <ul>
          <li>To log into an account: </li>
          <li className={cx("context__lists")}>For TikTok Desktop Web：</li>
          <li>1. Click the "Login" icon on the upper right corner</li>
          <li>2. Select login method</li>
          <li>
            3. Enter your account information or continue with selected login
            method
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

      <div onClick={handleShowPhone} className={cx("context__title")}>
        <h3>This phone number is already registered</h3>
        <ChevronRightIcon />
      </div>
      {!showPhone && (
        <ul>
          <li>To log into an account: </li>
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
          <li>
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
            7. If this isn't your account, tap "Continue with this number"
          </li>
          <li className={cx("context__lists")}>From the TikTok app:</li>
          <li>
            1. When you're logged out, tap "Use phone or email" on the sign in
            screen
          </li>
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

      <div onClick={handleShowBugLogin} className={cx("context__title")}>
        <h3>Why couldn't I complete the payment?</h3>
        <ChevronRightIcon />
      </div>
      {!showBugLogIn && (
        <ul>
          <li className={cx("context__lists")}>
            If you are eligible for purchase but you couldn't complete the
            payment, please check the following:
          </li>
          <li>1. You have linked a bank account which is in funds.</li>
          <li>2. There is no limit or restriction on your bank account.</li>
          <li>
            3. Please verify that the information you have entered (i.e.
            cardholder’s full name, email, address etc.) is accurate.
          </li>
          <li>
            4. Please make transactions at a lower amount, at a lower frequency
            and limit the number of cards being used.
          </li>
          <li className={cx("context__lists")}>
            If you still can't recharge Coins, tap the "Need more help" button
            below to give us details and screenshots of the problem.
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

      <div onClick={handleShowBugMonny} className={cx("context__title")}>
        <h3>Why didn't I receive my coins after making a payment?</h3>
        <ChevronRightIcon />
      </div>
      {!showBugMonny && (
        <ul>
          <li className={cx("context__lists")}>
            Transaction orders can typically take a few minutes to process.
            Please try refreshing the web page or wait for a moment to see if
            the issue gets fixed.
          </li>

          <li className={cx("context__lists")}>
            If you still can't see the purchased Coins, please submit a ticket
            by tapping the "Still have problem" button below with the full
            screenshot of your coin balance and purchase history.
          </li>
          <li>To find your coin balance and purchase history:</li>
          <li>
            1. On tiktok.com, click your profile picture, then click "Get
            coins". From here, you can see your coin balance.
          </li>
          <li>
            2. On tiktok.com, click your profile picture, then click "Get
            coins". Then click "View transaction history" to find your orders
            and corresponding invoices.
          </li>
          <li className={cx("context__lists")}>
            Make sure the screenshot you send us contains your coin balance and
            the transaction with the order ID, the amount of the transaction,
            and the time of the payment.
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
    </div>
  );
}

export default SelectAtopicPage;
