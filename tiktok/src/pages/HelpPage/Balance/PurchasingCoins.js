import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function PurchasingCoins() {
  const [showNotFoundLive, setShowNotFoundLive] = useState(false);
  const [showNotFoundComment, setShowNotFoundComment] = useState(false);
  const [showLiveLag, setShowLiveLag] = useState(false);
  const [showErrorLoagding, setShowErrorLoagding] = useState(false);
  const [showNoSoundLive, setShowNoSoundLive] = useState(false);
  const [showErrorIssues, setShowErrorIssues] = useState(false);
  const [showCharge, setShowCharge] = useState(false);

  const handleShowNotFoundLive = () => {
    setShowNotFoundLive(!showNotFoundLive);
  };
  const handleShowNotFoundComment = () => {
    setShowNotFoundComment(!showNotFoundComment);
  };
  const handleShowLiveLag = () => {
    setShowLiveLag(!showLiveLag);
  };
  const handleShowErrorLoagding = () => {
    setShowErrorLoagding(!showErrorLoagding);
  };
  const handleShowNoSoundLive = () => {
    setShowNoSoundLive(!showNoSoundLive);
  };
  const handleShowErrorIssues = () => {
    setShowErrorIssues(!showErrorIssues);
  };
  const handleShowCharge = () => {
    setShowCharge(!showCharge);
  };

  return (
    <>
      <h2>Purchasing Coins</h2>

      <div onClick={handleShowNotFoundLive} className={cx("context__title")}>
        <h3>What are Coins? How to recharge them?</h3>
        <ChevronRightIcon />
      </div>
      {showNotFoundLive && (
        <ul>
          <li className={cx("context__lists")}>
            Coins are virtual items used on TikTok. For details on what Coins
            are and how they may be used please refer to TikTok Virtual Items
            Policy: https://www.tiktok.com/legal/virtual-items
          </li>
          <li>You can recharge Coins on the website by doing the following:</li>
          <li>1. Visit https://www.tiktok.com/coin</li>
          <li>2. Tap the desired Coins package that you want to purchase.</li>
          <li>
            3. Select your payment method to pay for the Coins package. Note:
            You can manage your payment method by clicking the "Manage" button
            on the page where you select your payment method when paying for the
            Coins package.
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

      <div onClick={handleShowNotFoundComment} className={cx("context__title")}>
        <h3>Why is the purchase function currently unavailable?</h3>
        <ChevronRightIcon />
      </div>
      {showNotFoundComment && (
        <ul>
          <li className={cx("context__lists")}>
            If your purchase function is temporarily unavailable, it may be due
            to the following reasons:
          </li>
          <li>
            1. You have violated our Community Guidelines. TikTok is committed
            to maintaining a safe and positive in-app environment for our users.
            In line with this, TikTok does not tolerate any violation of our
            Community Guidelines, and we will take action accordingly if we spot
            any content that violates Community Guidelines.
          </li>
          <li>
            2. When we detect any unusual transaction on your account, your
            recharging will be temporarily unavailable for security reasons.{" "}
          </li>

          <li>
            3. We may impose spending limits on the purchase of Coins for the
            safety and wellbeing of our users.
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

      <div onClick={handleShowLiveLag} className={cx("context__title")}>
        <h3>Why am I not eligible to purchase Coins?</h3>
        <ChevronRightIcon />
      </div>
      {showLiveLag && (
        <ul>
          <li className={cx("context__lists")}>
            If you cannot access the recharging Coins option, it may be due to
            the following reasons:
          </li>
          <li>
            1. According to our Virtual Item Policy, purchasing and using Coins
            are currently only available to users who are at least 18 years old.{" "}
          </li>
          <li>
            2. Recharging coins via the website will be available in more
            countries in the future. Please stay tuned for updates.
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

      <div onClick={handleShowErrorLoagding} className={cx("context__title")}>
        <h3>Why couldn't I complete the payment?</h3>
        <ChevronRightIcon />
      </div>
      {showErrorLoagding && (
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
            and limit the number of cards being used.{" "}
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

      <div onClick={handleShowNoSoundLive} className={cx("context__title")}>
        <h3>Why didn't I receive my coins after making a payment?</h3>
        <ChevronRightIcon />
      </div>
      {showNoSoundLive && (
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
      <div onClick={handleShowErrorIssues} className={cx("context__title")}>
        <h3>
          Why did the coins I purchased on TikTok web not appear in the TikTok
          mobile app?
        </h3>
        <ChevronRightIcon />
      </div>
      {showErrorIssues && (
        <ul>
          <li className={cx("context__lists")}>
            If you can see the coins on tiktok.com but they're not showing on
            your TikTok mobile App "Balance" page, please check your account
            information and ensure the account you used to recharge from the web
            (tiktok.com) is the same as the account that the coin is not
            received.
          </li>

          <li className={cx("context__lists")}>
            If the problem persists, please send us the screenshot of the
            "Balance" page from your TikTok mobile App and coin balance page
            from web (tiktok.com).
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
      <div onClick={handleShowCharge} className={cx("context__title")}>
        <h3>How to apply for a refund for the coins recharge</h3>
        <ChevronRightIcon />
      </div>
      {showCharge && (
        <ul>
          <li className={cx("context__lists")}>
            You can request a refund for your Coins recharge by tapping the
            "Need more help?" button below and submit a ticket with the
            following information.
          </li>

          <li className={cx("context__lists")}>
            Please let us know for which order you desire to submit a refund
            exactly and make sure the request you're going to send us contains
            the following information.
          </li>
          <li>1. Your TikTok account username(shown as @XXX)</li>
          <li>2. The transaction ID of the order</li>

          <li className={cx("context__lists")}>
            You can access your transaction history by doing the following:
          </li>
          <li>
            {" "}
            1. Click on the avatar of your profile and select "Get coins".
          </li>
          <li>
            {" "}
            2. Tap the "View transaction history" option located in the top
            right corner of the page.
          </li>

          <li className={cx("context__lists")}>Note:</li>
          <li>
            1. Typically you have 14 days ("Withdrawal Period") to request a
            refund starting from the date you made the payment. Requests after
            the Withdrawal Period will not be accepted.
          </li>
          <li>
            2. If you use some or all of the Coins form the package you
            purchased to buy gifts before the expiration of the Withdrawal
            Period, that means you waive your right to request a refund for the
            recharge of the Coins.
          </li>
          <li>3. Each recharge order can only be refunded as a whole.</li>
          <li>
            4. After your refund is granted, it may take up to 7 business days
            for the refund to get back to the payment method you've used for the
            recharge. We will notify you with an inbox message.
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

export default PurchasingCoins;
