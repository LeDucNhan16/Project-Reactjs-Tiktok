import classNames from "classnames/bind";

import styles from "../Help.module.scss";
import { ChevronRightIcon } from "../../../Layouts/Icons/Icons";
import Button from "../../../components/Button/Button";
import { useState } from "react";
import HelpOther from "../HelpOther/HelpOther";

const cx = classNames.bind(styles);

function EditingProfile() {
  const [showUserName, setShowUserName] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const handleShowErrorPhone = () => {
    setShowUserName(!showUserName);
  };
  const handleShowChange = () => {
    setShowPhoto(!showPhoto);
  };
  const handleShowHaveNotReceived = () => {
    setShowName(!showName);
  };
  const handleShowHaveNotReceivedEmail = () => {
    setShowBio(!showBio);
  };
  return (
    <>
      <h2>Editing Profile</h2>

      <div onClick={handleShowErrorPhone} className={cx("context__title")}>
        <h3>Unable to change username</h3>
        <ChevronRightIcon />
      </div>
      {showUserName && (
        <ul>
          <li className={cx("context__lists")}>To change your username：</li>
          <li>1. Visit https://www.tiktok.com.</li>
          <li>2. Click your profile picture on the upper corner.</li>
          <li>3. Select "View Profile" to go to the profile page.</li>
          <li>4. Tap "Edit profile".</li>
          <li>5. Tap your username.</li>
          <li>6. Enter the new username you want to use.</li>
          <li className={cx("context__lists")}>Note:</li>
          <li>• Your username can only be changed once every 30 days. </li>
          <li>
            • Usernames can only contain letters, numbers, underscores, and
            periods. However, periods can't be put at the end of the username.
          </li>
          <li>
            • Your username is not the same as your account name. A username is
            the @username other TikTok users can use to tag or find you. An
            account name is the name visible to users on your profile.
          </li>
          <li>• This feature is not available for TikTok Mobile Web.</li>

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
      {showPhoto && (
        <ul>
          <li className={cx("context__lists")}>
            To add or change a profile photo:
          </li>
          <li className={cx("context__lists")}>
            1. Visit https://www.tiktok.com.
          </li>
          <li>2. Click your profile picture on the upper corner.</li>
          <li>3. Select "View Profile" to go to the profile page.</li>
          <li>4. Tap "Edit profile".</li>
          <li>5. Click your current profile photo to change.</li>
          <li className={cx("context__lists")}>Note:</li>
          <li>
            • Profile photos will not be visible on your profile once a profile
            video is set.{" "}
          </li>
          <li>• Photos must be at least 20x20 pixels to upload. </li>
          <li>• This feature is not available for TikTok Mobile Web.</li>

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
      {showName && (
        <ul>
          <li className={cx("context__lists")}>To update the account name:</li>
          <li className={cx("context__lists")}>
            1. Visit https://www.tiktok.com.
          </li>

          <li>2. Click your profile picture on the upper corner.</li>
          <li>3. Select "View Profile" to go to the profile page.</li>
          <li>4. Tap "Edit profile".</li>
          <li>5. Tap "Name". </li>
          <li>6. Enter the new name you want to use.</li>
          <li>7. Tap "Save".</li>

          <li className={cx("context__lists")}>
            If you have put in the correct phone number, please restart your
            device and request verification code again.
          </li>
          <li className={cx("context__lists")}>Note:</li>
          <li>• Names cannot exceed 30 characters.</li>
          <li>• This feature is not available for TikTok Mobile Web.</li>

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
        <h3>Changing account bio</h3>
        <ChevronRightIcon />
      </div>
      {showBio && (
        <ul>
          <li className={cx("context__lists")}>To update your bio:</li>

          <li className={cx("context__lists")}>
            1. Visit https://www.tiktok.com.
          </li>
          <li>2. Click your profile picture on the upper corner.</li>
          <li>3. Select "View Profile" to go to the profile page.</li>
          <li>4. Tap "Edit profile".</li>
          <li>5. Tap "Bio". </li>
          <li>6. Enter the new bio.</li>
          <li>7. Tap "Save".</li>

          <li className={cx("context__lists")}>Note:</li>
          <li>• Bios cannot exceed 80 characters.</li>
          <li>• This feature is not available for TikTok Mobile Web.</li>
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

export default EditingProfile;
