import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Coin.module.scss";

const cx = classNames.bind(styles);

function HistoryRules() {
  return (
    <div className={cx("history__rules")}>
      <div className={cx("rules")}>
        <h3 className={cx("rules__title")}>Terms of Purchase for Coins</h3>

        <div className={cx("rules__items")}>
          <h3>Date: Aug. 17, 2021</h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <span>These terms and conditions (the</span> <h4>"Terms"</h4>)
              <span>regarding the purchase of virtual coins</span>
              <h4>("Coins")</h4>
              <span>on the TikTok website at www.tiktok.com (the</span>
              <h4>"Website"</h4>)
              <span>
                govern the relationship and serve as an agreement between you
              </span>
            </li>
            <li>
              (the
              <h4>"Customer"</h4> or <h4>"you"</h4>) and the TikTok entity that
              offers virtual coins for sale in your country (<h4>“TikTok”</h4>,{" "}
              <h4>“we”</h4> or <h4>“us”</h4>):
            </li>
            <li>
              <h4>• Residents of the United Kingdom: </h4>
              <span>
                {" "}
                TikTok Information Technologies UK Limited, which is registered
                in England with its registered address at 6th Floor, One London
                Wall, London, EC2Y 5EB, United Kingdom.
              </span>
            </li>
            <li>
              <h4>• Residents of Brazil and Mexico: </h4>
              <span>
                {" "}
                TikTok Inc., which is registered in the State of California with
                its registered address at 5800 Bristol Parkway, Culver City, CA
                90230.
              </span>
            </li>
            <li>
              <h4>• Residents of other permitted countries: </h4>
              <span>
                TikTok Pte. Ltd, which is registered in Singapore with its
                registered address at 1 Raffles Quay, #26-10, South Tower,
                Singapore 048583.
              </span>
            </li>
            <li>
              <span>
                Please read these Terms carefully before you purchase Coins. If
                you do not agree to these Terms, then please do not purchase
                Coins.
              </span>
            </li>
            <li>
              Capitalised terms used but not defined in these Terms shall have
              the meaning set out in our <Link>Terms of Service</Link>,{" "}
              <Link>Community Guidelines </Link>or{" "}
              <Link>Virtual Items Policy</Link>. Any personal data processed in
              connection with your purchase Coins will be processed in
              accordance with our Privacy Policy (the foregoing terms and
              policies are referred to collectively in these Terms as the
              "TikTok Terms and Policies" )
            </li>
          </ul>
        </div>
        <div className={cx("rules__items")}>
          <h3>Conditions of Purchase</h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <p>1.</p> Your use of Coins is at all times subject to the TikTok
              Terms and Policies.
            </li>
            <li>
              <p>2.</p>To purchase Coins on the Website, you must meet the
              following conditions:
              <ul>
                <li>
                  <p>a.</p>be a registered user of the Platform;
                  <p>b.</p>be 18 years old (or the age of majority in your
                  jurisdiction) or older; and
                  <p>c.</p>be capable of entering into a legally binding
                  agreement.
                </li>
              </ul>
            </li>
            <li>
              <p>3.</p>We reserve the right to refuse requests to purchase Coins
              where we have a legitimate reason (such as when we reasonably
              believe that you are younger than 18 years of age or that you have
              violated the TikTok Terms and Policies). In addition, we may
              impose spending limits on the purchase of Coins for the safety and
              wellbeing of our users. You will be notified if any such spending
              limits are applied to you.
            </li>
            <li>
              <p>4.</p>If we have erroneously credited your account with Coins
              in excess of the amount that you have purchased then we reserve
              the right to deduct the excess amount.
            </li>
          </ul>
        </div>
        <div className={cx("rules__items")}>
          <h3>Payment Methods</h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <p>5.</p> You agree that by purchasing Coins on the Website that
              you authorize us and our designated payment processor to charge
              the full purchase amount of the transaction including all
              applicable taxes and payment processing fees to your debit or
              credit card (or any alternative payment methods that we may accept
              from time to time).
            </li>

            <li>
              <p>6.</p>If a purchase order has been declined due to issues with
              your payment method, card issuer, bank or otherwise, we may cancel
              your order automatically. We are not responsible for any issues
              between you and your card issuer or bank.
            </li>
          </ul>
        </div>
        <div className={cx("rules__items")}>
          <h3>Refunds </h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <p>7.</p> Unless you live in a country which provides for a longer
              withdrawal period, then you have 14 days to cancel your purchase
              of Coins and request a refund ("Withdrawal Period") starting from
              the date you made the payment. Requests for a refund made after
              the Withdrawal Period will not be accepted.
            </li>

            <li>
              <p>8.</p> To cancel your purchase, please contact our customer
              support at https://www.tiktok.com/legal/report/transaction and
              provide us with the transaction ID of the purchase that you wish
              to cancel. Alternatively, you can fill out and send us the model
              withdrawal form below.
            </li>
            <li>
              <p>9.</p> You acknowledge and agree that, if you use any or all
              Coins that were purchased as part of a single transaction before
              expiry of the Withdrawal Period, then you will not be able to
              request a refund for all or part of the Coins purchased in the
              respective transaction. For example, if you purchase Coins and
              then use some or all of them to buy Gifts before the expiration of
              the Withdrawal Period that means that you waive your right to
              cancel the purchase of the Coins.
            </li>

            <li>
              <p>10.</p>Refunds can only be issued to the original payment
              method TikTok will not charge you any fees as a result of the
              refund.
            </li>
            <li>
              <p>11.</p>Refunds may take up to 7 business days to appear in your
              account, depending on the payment method used to make the
              purchase.
            </li>
            <li>
              <p>12.</p> We reserve the right to monitor refunds for any abuse
              such as excessive or frequent refunds.
            </li>
          </ul>
        </div>
        <div className={cx("rules__items")}>
          <h3>Changes to these Terms</h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <p>13.</p>We may amend these Terms from time to time, for instance
              when we update the functionality of Coins or when there are
              regulatory changes that impact these Terms or the use of Coins.
              Any amendments to these Terms will be made in accordance with our
              Terms of Service.
            </li>
          </ul>
        </div>
        <div className={cx("rules__items")}>
          <h3>Contact us</h3>
          <ul className={cx("rules__items__title")}>
            <li>
              <p>14.</p>If you have any problems or questions then please
              contact us at
              <Link to="https://www.tiktok.com/feedback?lang=en">
                https://www.tiktok.com/feedback?lang=en.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HistoryRules;
