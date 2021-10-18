import React, { useState } from 'react';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import cN from 'classnames';

import { HiOutlineChevronLeft } from 'react-icons/hi';
import getLocalstorage from '../hooks/getLocalstorage';

const WidgetContainer = () => {
  const shopify = window.Shopify;
  const [openWidget, setOpenWidget] = useState(false);

  getLocalstorage();

  return (
    shopify && (
      <div
        className={cN('WidgetContainer', {
          'WidgetContainer--Closed': !openWidget,
          'WidgetContainer--Open': openWidget,
        })}
      >
        <div className="WidgetContainer__Opener-Container">
          <div
            onClick={() => setOpenWidget(!openWidget)}
            className="WidgetContainer__Opener"
          >
            <div className="WidgetContainer__Arrow">
              <HiOutlineChevronLeft />
            </div>
          </div>
        </div>
        <div className="WidgetContainer__Wrapper">
          <WidgetHeader />
          <WidgetContent />
          <WidgetFooter />
        </div>
      </div>
    )
  );
};

export default WidgetContainer;
