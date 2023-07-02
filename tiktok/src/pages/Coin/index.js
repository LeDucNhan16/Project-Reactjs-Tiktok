import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Coin.module.scss";
import Button from "../../components/Button/Button";
import Image from "../../Image/Image";
import {
  DeleteIcon,
  PaperIcon,
  QuestionMarkIcon,
} from "../../Layouts/Icons/Icons";
import { useState } from "react";
import HistoryRules from "./HistoryRules";

const cx = classNames.bind(styles);

function Coin() {
  const [showHistory, setShowHistory] = useState(false);
  const [coinDepositTerms, setDepositTerms] = useState(false);
  const [showRecharge, setRecharge] = useState(false);
  const [showMomo, setShowMomo] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleMountShowHistory = () => {
    setShowHistory(false);
  };
  const handleShowHistory = () => {
    setShowHistory(true);
  };

  const handleShowcoinDepositTerms = () => {
    setDepositTerms(true);
  };

  const handleShowRecharge = () => {
    setRecharge(true);
  };
  const handleMountRecharge = () => {
    setRecharge(false);
  };

  const handleShowMomo = () => {
    setShowCard(false);
    setShowMomo(true);
  };

  const handleShowCard = () => {
    setShowMomo(false);
    setShowCard(true);
  };
  const handleMountCardandMomo = () => {
    setShowCard(false);
    setShowMomo(false);
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("coin_cents")}>
          <h3 className={cx("coin_subcents")}>Get Coins</h3>
          <Link onClick={handleShowHistory} className={cx("coin_history")}>
            View transaction history
          </Link>
        </div>
        <div className={cx("use_coin")}>
          <div className={cx("use_block")}>
            <Image
              className={cx("use_avatar")}
              src="https://tse1.mm.bing.net/th?id=OIP.TEeZO0--ukKoHkzxLulw-gHaE8&amp;pid=Api&amp;P=0"
              alt="avatar"
              aria-expanded="false"
            />
            <ul className={cx("use_name")}>
              <li>nhanle1602</li>
              <li>
                <svg
                  className={cx("avatar_coin")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>0</span>
              </li>
            </ul>
            <div className={cx("use_subcents")}>
              <ul>
                <li>
                  số dư trên Live $0.00
                  <svg
                    className={cx("avatar_coin")}
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                    <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                      fill="#FABC15"
                    ></path>
                    <path
                      d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                      fill="#FEF5CD"
                    ></path>
                  </svg>
                  <span>0</span>
                </li>
                <li className={cx("show_coin")}>
                  Quy đổi thành xu
                  <FontAwesomeIcon
                    className={cx("use_chevronright")}
                    icon={faChevronRight}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("load_coin")}>
          <h5>Nạp xu : </h5>
          <h5 className={cx("load_coin_colored")}>
            Tiết kiệm tới 24% so với mua hàng trong ứng dụng
          </h5>
          <svg
            className={cx("load_coin_icon")}
            width="1em"
            data-e2e=""
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM27 16C27 17.6569 25.6569 19 24 19C22.3431 19 21 17.6569 21 16C21 14.3431 22.3431 13 24 13C25.6569 13 27 14.3431 27 16ZM23 22C22.4477 22 22 22.4477 22 23V34C22 34.5523 22.4477 35 23 35H25C25.5523 35 26 34.5523 26 34V23C26 22.4477 25.5523 22 25 22H23Z"
            ></path>
          </svg>
        </div>
        <div className={cx("coin_list")}>
          <div className={cx("coin_list_btn")}>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>70</span>
              </div>
              <p>$19,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>350</span>
              </div>
              <p>$95,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>700</span>
              </div>
              <p>$190,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>1400</span>
              </div>
              <p>$380,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>3500</span>
              </div>
              <p>$952,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>7000</span>
              </div>
              <p>$1,905,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>17,700</span>
              </div>
              <p>$4,760,040</p>
            </button>
            <button className={cx("block_btn")}>
              <div className={cx("block_btn_loadcents")}>
                <svg
                  className={cx("coin_avatar")}
                  width="1em"
                  data-e2e=""
                  height="1em"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
                  <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
                    fill="#FABC15"
                  ></path>
                  <path
                    d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
                    fill="#FEF5CD"
                  ></path>
                </svg>
                <span>Tùy chỉnh</span>
              </div>
              <p>Hỗ trợ số lượng lớn</p>
            </button>
          </div>
        </div>
        <div className={cx("payment_methods")}>
          <p>Phương thức thanh toán </p>
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/momo_4256e5.png"
            data-e2e="wallet-payment-icon-MOMO"
            className={cx("avatar_pay")}
          />
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/zalopay-icon_e8534b.svg"
            data-e2e="wallet-payment-icon-ZALOPAY"
            className={cx("avatar_pay")}
          />
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg"
            data-e2e="wallet-payment-icon-VISA"
            className={cx("avatar_pay")}
          />
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard-gray-update_7b3ceb.svg"
            data-e2e="wallet-payment-icon-MASTER"
            className={cx("avatar_pay")}
          />
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg"
            data-e2e="wallet-payment-icon-AMEX"
            className={cx("avatar_pay")}
          ></Image>
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/discover_5ec158.svg"
            data-e2e="wallet-payment-icon-DISCOVER"
            className={cx("avatar_pay")}
          ></Image>
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/2c2p-border_2ec2d6.png"
            data-e2e="wallet-payment-icon-BANK_TRANSFER"
            className={cx("avatar_pay")}
          ></Image>
          <Image
            src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/diners_a3de24.svg"
            data-e2e="wallet-payment-icon-DINERS"
            className={cx("avatar_pay")}
          ></Image>
        </div>
        <div className={cx("result")}>
          Tổng
          <span>$19,040</span>
        </div>
        <div>
          <Button onClick={handleShowRecharge} largePay>
            Nạp tiền
          </Button>
        </div>

        {showHistory && (
          <div className={cx("history")}>
            <div className={cx("history__head")}>
              <FontAwesomeIcon
                onClick={handleMountShowHistory}
                className={cx("icon__back")}
                icon={faChevronLeft}
              />
              <div className={cx("title__sub")}>
                <h2>Transaction history</h2>
                <div>
                  <span>
                    This page only shows the transaction history of your Coins
                    purchased through TikTok.com.
                  </span>
                  <button
                    className={cx("coin__deposit__terms")}
                    onClick={handleShowcoinDepositTerms}
                  >
                    <Link> View Terms of Purchase for Coins</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className={cx("history__body")}>
              <PaperIcon />
              <span>no transaction yet</span>
            </div>
          </div>
        )}

        {coinDepositTerms && <HistoryRules />}
      </div>
      {showRecharge && (
        <div className={cx("main__recharge")}>
          <div className={cx("recharge")}>
            <div className={cx("recharge__head")}>
              <h2>Order summary</h2>
              <button onClick={handleMountRecharge}>
                <DeleteIcon />
              </button>
            </div>
            <div className={cx("history__body")}>
              <div className={cx("history__body__items")}>
                <h3>Account</h3>
                <div className={cx("name")}>
                  <Image src="https://tse3.mm.bing.net/th?id=OIP.cLFYh5JgUcvbxNL4oz9WjAHaGF&pid=Api&P=0" />
                  <h3>nhanle1602</h3>
                </div>
              </div>
              <div className={cx("history__body__itemssub")}>
                <div>
                  <span>70 Coins</span>
                  <span>₫ 19,100</span>
                </div>
                <div>
                  <h4>Total</h4>
                  <h4>₫ 19,100</h4>
                </div>
              </div>
              <div className={cx("history__body__items")}>
                <h3>Account</h3>
                <Button className={cx("btn")}>Manage</Button>
              </div>
              <form>
                <div className={cx("selects")}>
                  <div className={cx("name")}>
                    <div
                      onClick={handleShowMomo}
                      className={cx("select__name")}
                    >
                      <input type="radio" id="huey" name="drone" value="huey" />
                      <label for="huey">MoMo</label>
                    </div>
                    <div className={cx("select__img")}>
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/momogrey_c80680.png"
                      />
                    </div>
                  </div>
                  {showMomo && (
                    <div className={cx("select__context")}>
                      <Image src="https://lf16-co.g-p-static.com/obj/pipo-sg/checkout_card/svg/paypal-extral.svg" />
                      <p>Link your account first</p>
                      <p>
                        We’ll save your payment method securely for future use.
                      </p>
                      <Button largePay>Link now</Button>
                    </div>
                  )}
                </div>
                <div className={cx("selects")}>
                  <div onClick={handleMountCardandMomo} className={cx("name")}>
                    <div className={cx("select__name")}>
                      <input
                        type="radio"
                        id="dewey"
                        name="drone"
                        value="dewey"
                      />
                      <label for="dewey">ZaloPay</label>
                    </div>
                    <div className={cx("select__img")}>
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/zalopay-gray_0818a4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={cx("selects")}>
                  <div className={cx("name")}>
                    <div
                      onClick={handleShowCard}
                      className={cx("select__name")}
                    >
                      <input
                        type="radio"
                        id="louie"
                        name="drone"
                        value="louie"
                      />
                      <label for="louie">Credit / debit card</label>
                    </div>
                    <div className={cx("select__img")}>
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg"
                      />
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard-gray-update_7b3ceb.svg"
                      />
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg"
                      />
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/diners_a3de24.svg"
                      />
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/discover_5ec158.svg"
                      />
                    </div>
                  </div>
                  {showCard && (
                    <div className={cx("context__card")}>
                      <div className={cx("context__card__items")}>
                        <div className={cx("list")}>
                          <h4>Card number</h4>
                          <input placeholder="1234 4213 2134 2134" />
                        </div>
                        <div className={cx("list")}>
                          <h4>Expiration date</h4>
                          <input placeholder="MM/YY" />
                        </div>
                      </div>
                      <div className={cx("context__card__items")}>
                        <div className={cx("list")}>
                          <h4>Security code</h4>
                          <input placeholder="CVV/CVC" />
                        </div>
                        <div className={cx("list")}>
                          <h4>Cardholder name</h4>
                          <input placeholder="Cardholder name" />
                        </div>
                      </div>
                      <div className={cx("context__card__tick")}>
                        <input id="checkbox" value="checkbox" type="checkbox" />
                        <label for="checkbox">
                          Save the information for future use
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className={cx("selects")}>
                  <div onClick={handleMountCardandMomo} className={cx("name")}>
                    <div className={cx("select__name")}>
                      <input
                        type="radio"
                        id="bank"
                        name="drone"
                        value="dewey"
                      />
                      <label for="bank">Bank transfer</label>
                    </div>
                    <div className={cx("select__img")}>
                      <Image
                        className={cx("select__img__list")}
                        alt="img"
                        src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/2c2p_629df5.png"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className={cx("history__body__footer")}>
                <ul className={cx("title")}>
                  <span>By clicking “Pay now”, you agree to our</span>
                  <button onClick={handleShowcoinDepositTerms}>
                    <Link>Terms of Purchase for Coins.</Link>
                  </button>
                  <span>
                    By using any amount of Coins within 14 days after clicking
                    “Pay Now”, you acknowledge and confirm that you will no
                    longer be eligible for a refund of this order. Payment
                    transactions are processed by PIPO
                  </span>
                  <Link
                    to="https://oneunita.com/privacy_policy?locale=en"
                    target="_blank"
                  >
                    . PIPO Privacy Policy
                  </Link>
                </ul>
                <ul className={cx("title")}>
                  <span>
                    By continuing this purchase, you confirm that you live in
                  </span>
                  <Link>Vietnam.</Link>
                </ul>
              </div>

              <div className={cx("footer__btn")}>
                <button className={cx("btn__item")}>
                  <QuestionMarkIcon />
                </button>
                <Button onClick={handleMountRecharge} largePay>
                  Pay new
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Coin;
