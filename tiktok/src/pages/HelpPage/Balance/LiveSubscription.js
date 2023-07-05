import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function LiveSubscription() {
  const [showErrorSubLive, setShowErrorSubLive] = useState(false);
  const [showErrorSubscription, setShowErrorSubscription] = useState(false);
  const [showErrorPayment, setShowErrorPayment] = useState(false);
  const [showErrorPaySub, setShowErrorPaySub] = useState(false);
  const [showErrorSubRefund, setShowErrorSubRefund] = useState(false);

  const handleShowSuspended = () => {
    setShowErrorSubLive(!showErrorSubLive);
  };
  const handleShowErrorSubscription = () => {
    setShowErrorSubscription(!showErrorSubscription);
  };
  const handleShowErrorPayment = () => {
    setShowErrorPayment(!showErrorPayment);
  };
  const handleShowErrorPaySub = () => {
    setShowErrorPaySub(!showErrorPaySub);
  };
  const handleShowErrorSubRefund = () => {
    setShowErrorSubRefund(!showErrorSubRefund);
  };

  return (
    <>
      <h2>LIVE subscription</h2>

      <div onClick={handleShowSuspended} className={cx("context__title")}>
        <h3>I cannot subscribe to more LIVE Communities</h3>
        <ChevronRightIcon />
      </div>
      {showErrorSubLive && (
        <ul>
          <li className={cx("context__lists")}>
            If you subscribe to LIVE Communities in-app, the maximum number of
            LIVE Communities you can subscribe to is 20.
          </li>
          <li>
            You may subscribe to more LIVE Communities on the TikTok website. If
            you have any suggestions, you may submit them by tapping "Need more
            help?" below.
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
        onClick={handleShowErrorSubscription}
        className={cx("context__title")}
      >
        <h3>LIVE subscription is not available</h3>
        <ChevronRightIcon />
      </div>
      {showErrorSubscription && (
        <ul>
          <li className={cx("context__lists")}>
            LIVE subscription is only available users who are at least 18 years
            old (exceptions: you must be 19 years old in South Korea).
          </li>
          <li>
            If you are unable to subscribe to a LIVE Community but have met the
            requirements, please submit your problem by tapping "Need more
            help?" below.
          </li>
          <li>Note:</li>
          <li>
            If we detect any unusual transactions on your account, LIVE
            subscription will be temporarily unavailable.{" "}
          </li>
          <li>For more information, see our LIVE Subscription Terms. </li>

          <div className={cx("context__btn")}>
            <h3>Is your problem resolved?</h3>
            <div>
              <Button small>Yes</Button>
              <Button small>no</Button>
            </div>
          </div>
        </ul>
      )}

      <div onClick={handleShowErrorPayment} className={cx("context__title")}>
        <h3>My LIVE subscription payment couldn't be processed</h3>
        <ChevronRightIcon />
      </div>
      {showErrorPayment && (
        <ul>
          <li className={cx("context__lists")}>
            If you meet the requirements to subscribe to a LIVE Community but
            your payment can't be processed, please confirm:
          </li>
          <li>
            1. You have linked a valid payment method with your Google Play, App
            Store account, or on the TikTok website.
          </li>
          <li>
            2. You have enough balance in your payment method for your selected
            subscription.
          </li>
          <li>3. You're not using a VPN for your network.</li>
          <li>4. Your TikTok app is updated to the latest version.</li>
          <li>5. You have a stable network connection.</li>

          <li className={cx("context__lists")}>
            If your purchase was made in-app:
          </li>
          <li>
            Go to the Google Play or Apple App Store to report your issue.
          </li>
          <li>
            If you purchase was made on the web version: Submit your problem by
            tapping "Need more help?" below.
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
      <div onClick={handleShowErrorPaySub} className={cx("context__title")}>
        <h3>I didn't subscribe to a LIVE Community after making payment</h3>
        <ChevronRightIcon />
      </div>
      {showErrorPaySub && (
        <ul>
          <li className={cx("context__lists")}>
            If you're still not able to subscribe to a LIVE Community after
            making a payment, try restarting the app or refreshing the web page.
            Then try refreshing your "LIVE subscription" page.
          </li>
          <li>
            If you still can't see the subscribed LIVE Community, please send us
            a full screenshot of purchase receipt or notification from your
            Google Play, Apple App Store or the TikTok inbox message by tapping
            "Need more help?" below.
          </li>
          <li>
            Note: You can find your receipt in the confirmation email sent by
            the Google Play or Apple App Store. You can also find the
            notification inbox message sent by TikTok if you subscribe to LIVE
            Community on the TikTok website. Please make sure the screenshot you
            send us contains the order ID, the amount of the transaction, and
            the time of the payment.
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
      <div onClick={handleShowErrorSubRefund} className={cx("context__title")}>
        <h3>How to apply for a refund for your LIVE subscription</h3>
        <ChevronRightIcon />
      </div>
      {showErrorSubRefund && (
        <ul>
          <li className={cx("context__lists")}>
            Unless you are not able to access the LIVE Community benefits, the
            subscription to LIVE Community is not eligible for a refund.
          </li>
          <li>
            If you have any suggestions, you may submit them by tapping "Need
            more help?" below.
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

export default LiveSubscription;
