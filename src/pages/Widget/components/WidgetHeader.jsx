import React, { useContext, useEffect } from 'react';
import Store from '../store/initialStore';
import cN from 'classnames';
import updateLocalStorage from '../hooks/updateLocalStorage';

const WidgetHeader = () => {
  const contextValue = useContext(Store);
  const { activeTab, setActiveTab } = useContext(Store);

  useEffect(() => {
    updateLocalStorage(contextValue);
  }, [activeTab]);

  return (
    <div className="WidgetHeader">
      <div
        className={cN('WidgetHeader__tab', {
          active: activeTab === 'generator',
        })}
        onClick={() => setActiveTab('generator')}
      >
        <div className="Tab__Content">Generator</div>
      </div>
      <div
        className={cN('WidgetHeader__tab WidgetHeader__Disabled', {
          active: activeTab === 'history',
        })}
        onClick={() => setActiveTab('history')}
      >
        <div className="Tab__Content">History</div>
      </div>
      <div
        className={cN('WidgetHeader__tab', {
          active: activeTab === 'settings',
        })}
        onClick={() => setActiveTab('settings')}
      >
        <div className="Tab__Content">
          <div className="Tab__Icon">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default WidgetHeader;
