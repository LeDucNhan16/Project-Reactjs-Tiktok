import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircleXmark,
  faMagnifyingGlass,
  //   faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import HeadLessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapperVideo } from "../PopperVideo";
import styles from "./SearchVideo.module.scss";
import * as searchServices from "../../../Services/SearchServices";
import AccountItemVideo from "../AccountItemVideo/AccountItemVideo";

const cx = classNames.bind(styles);

function SearchVideo() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchShow, setSearchShow] = useState(true);
  const [searchLoading, setSearchLoading] = useState(true);

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
    const fetchApi = async () => {
      setSearchLoading(false);

      const result = await searchServices.search(searchValue);

      setSearchResult(result);

      setSearchLoading(false);
    };

    fetchApi();
  }, [searchValue]);

  return (
    // Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadLessTippy
        visible={searchShow && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx("search_result")} tabIndex="-1" {...attrs}>
            <PopperWrapperVideo>
              {searchResult.map((result) => (
                <AccountItemVideo key={result.id} data={result} />
              ))}
            </PopperWrapperVideo>
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
          {!!searchValue && !searchLoading && (
            <button className={cx("clear")} onClick={handleClearSearch}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {!!searchValue && searchLoading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button className={cx("search_btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default SearchVideo;
