import React, { useContext, useEffect } from 'react';
import Store from '../store/initialStore';
import cN from 'classnames';

const WidgetHeader = () => {
  const { activeTab, setActiveTab, history } = useContext(Store);

  useEffect(() => {
    if (activeTab === 'history' && history.length < 1) {
      setActiveTab('generator');
    }
  }, [history]);

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
        className={cN('WidgetHeader__tab', {
          active: activeTab === 'history',
          WidgetHeader__Disabled: history.length < 1,
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
