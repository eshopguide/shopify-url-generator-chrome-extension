import React, { useContext, useState, useEffect } from 'react';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import cN from 'classnames';

import { HiOutlineChevronLeft } from 'react-icons/hi';
import Store from '../store/initialStore';

const WidgetContainer = () => {
  const shopify = window.Shopify;
  const [openWidget, setOpenWidget] = useState(false);
  const { setActiveTab, settings } = useContext(Store);

  useEffect(() => {
    window.addEventListener('storage', (e) => {
      const storeDataObject = JSON.parse(
        localStorage.getItem('storeDataObject')
      );

      setActiveTab(storeDataObject.activeTab);
      settings.setDisablePreviewbar(storeDataObject.settings.disablePreviewbar);
    });
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
