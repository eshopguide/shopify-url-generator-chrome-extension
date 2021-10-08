import React, { useContext } from 'react';
import Store from '../store/initialStore';
import WidgetSettings from './WidgetSettings';
import WidgetUrlGenerator from './WidgetUrlGenerator';

const WidgetContent = () => {
  const { activeTab } = useContext(Store);
  return (
    <div className="WidgetContent">
      {activeTab === 'generator' && <WidgetUrlGenerator />}
      {activeTab === 'settings' && <WidgetSettings />}
    </div>
  );
};

export default WidgetContent;
