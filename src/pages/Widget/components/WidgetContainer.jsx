import React, { useContext, useEffect, useState } from 'react';
import Store from '../store/initialStore';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import cN from 'classnames';

import { HiOutlineChevronLeft } from 'react-icons/hi';

const WidgetContainer = () => {
  const { shopify, setShopify } = useContext(Store);
  const [openWidget, setOpenWidget] = useState(false);

  useEffect(() => {
    setShopify(window.Shopify);
  }, []);

  return (
    shopify && (
      <div
        className={cN('WidgetContainer', {
          'WidgetContainer--Closed': !openWidget,
          'WidgetContainer--Open': openWidget,
        })}
      >
        <div
          onClick={() => setOpenWidget(!openWidget)}
          className="WidgetContainer__Opener"
        >
          <div className="WidgetContainer__Arrow">
            <HiOutlineChevronLeft />
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
