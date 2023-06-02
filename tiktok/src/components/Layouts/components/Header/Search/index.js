import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  //   faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import HeadLessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "../../../Popper";
import styles from "./Search.module.scss";
import AccountItem from "../../../../AccountItem";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchShow, setSearchShow] = useState(true);

  const inputRef = useRef();

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchShow(false);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    axios
      .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
        params: {
          q: searchValue,
          type: "less",
        },
      })
      .then((res) => {
        setSearchResult(res.data.data);
      });
  }, [searchValue]);

  return (
    // Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadLessTippy
        visible={searchShow && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx("search_result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search_title")}>Tài khoản</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => setSearchShow(false)}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchShow(true)}
          />
          {!!searchValue && (
            <button className={cx("clear")} onClick={handleClearSearch}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          <Tippy
            delay={[0, 200]}
            content="Tìm kiếm"
            placement="bottom"
            hideOnClick={false}
          >
            <button className={cx("search_btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Tippy>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
