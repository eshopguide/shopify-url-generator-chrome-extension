import React, { useContext, useEffect, useState } from 'react';
import Store from '../store/initialStore';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import cN from 'classnames';

const WidgetContainer = () => {
  const { setShopify } = useContext(Store);
  const [openWidget, setOpenWidget] = useState(false);

  useEffect(() => {
    setShopify(window.Shopify);
  }, []);

  return (
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
        <div className="WidgetContainer__Arrow">{'<'}</div>
      </div>
      <div className="WidgetContainer__Wrapper">
        <WidgetHeader />
        <WidgetContent />
        <WidgetFooter />
      </div>
    </div>
  );
};

export default WidgetContainer;