import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import MenuLoginOut from "./MenuLoginOut";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isHistory = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isHistory) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      hideOnClick={false}
      interactive
      placement="bottom-end"
      offset={[15, 15]}
      delay={[0, 500]}
      render={(attrs) => (
        <div className={cx("menu_list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <HeaderMenu
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx("menu_body")}>{renderItems()}</div>
            {history.length === 1 && <MenuLoginOut />}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
