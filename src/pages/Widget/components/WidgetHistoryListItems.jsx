import React, { useState } from 'react';
import {
  HiOutlineChevronDown,
  HiClipboardCopy,
  HiEye,
  HiTrash,
} from 'react-icons/hi';
import cN from 'classnames';

const WidgetHistoryListItems = ({
  themeKeys,
  themeKey,
  themeIndex,
  onClick,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(0);

  const listItems = (dropdown) => {
    return themeKeys.map((item, i) => {
      return (
        <div className="WidgetHistory__Listitem" key={item.pathname + item.id}>
          {!dropdown && <div className="WidgetHistory__Name">{item.name}</div>}
          <div className="WidgetHistory__Role">Status: {item.role}</div>
          <div className="WidgetHistory__Pathname">{item.pathname}</div>
          <div className="WidgetHistory__ButtonContainer">
            <div
              className="WidgetHistory__Button"
              onClick={() => navigator.clipboard.writeText(item.url)}
            >
              <HiClipboardCopy />
            </div>
            <a
              className="WidgetHistory__Button"
              href={item.url}
              target="_blank"
            >
              <HiEye />
            </a>
            <div className="WidgetHistory__Button" onClick={onClick(item.url)}>
              <HiTrash />
            </div>
          </div>
        </div>
      );
    });
  };

  if (themeKeys.length > 1) {
    return (
      <div
        className={cN('WidgetHistory__Dropdown', {
          'WidgetHistory__Dropdown--closed': !dropdownOpen,
          'WidgetHistory__Dropdown--open': dropdownOpen,
        })}
        key={themeKey + themeIndex}
      >
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="WidgetHistory__DropdownHeader"
        >
          <div className="WidgetHistory__ThemeKey">{themeKey}</div>
          <div className="WidgetHistory__Arrow">
            <HiOutlineChevronDown />
          </div>
        </div>
        <div className="WidgetHistory__DropdownContent">{listItems(true)}</div>
      </div>
    );
  } else {
    return <div key={themeKey + themeIndex}>{listItems()}</div>;
  }
};

export default WidgetHistoryListItems;
