import React, { useContext, useState, useEffect } from 'react';
import WidgetContent from './WidgetContent';
import WidgetFooter from './WidgetFooter';
import WidgetHeader from './WidgetHeader';
import cN from 'classnames';

import { HiOutlineChevronLeft } from 'react-icons/hi';
import Store from '../store/initialStore';
import setLocalStorage from '../hooks/setLocalStorage';

const WidgetContainer = () => {
  const shopify = window.Shopify;
  const storeValue = useContext(Store);
  const [openWidget, setOpenWidget] = useState(false);
  const { activeTab, setActiveTab, settings } = useContext(Store);

  useEffect(() => {
    function useCopyOfLocalstorage() {
      const storeDataObject = JSON.parse(
        localStorage.getItem('storeDataObject')
      );

      setActiveTab(storeDataObject.activeTab);
      settings.setDisablePreviewbar(storeDataObject.settings.disablePreviewbar);
    }

    if (localStorage.getItem('storeDataObject')) {
      useCopyOfLocalstorage();
    }

    window.addEventListener('storage', (e) => {
      useCopyOfLocalstorage();
    });
  }, []);

  useEffect(() => {
    setLocalStorage(storeValue);
  }, [activeTab, settings]);

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
