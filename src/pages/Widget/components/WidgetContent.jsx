import React, { useContext } from 'react';
import Store from '../store/initialStore';
import WidgetSettings from './WidgetSettings';
import WidgetUrlGenerator from './WidgetUrlGenerator';
import WidgetHistory from './WidgetHistory';

const WidgetContent = () => {
  const { activeTab } = useContext(Store);
  return (
    <div className="WidgetContent">
      {activeTab === 'generator' && <WidgetUrlGenerator />}
      {activeTab === 'history' && <WidgetHistory />}
      {activeTab === 'settings' && <WidgetSettings />}
    </div>
  );
};

export default WidgetContent;
