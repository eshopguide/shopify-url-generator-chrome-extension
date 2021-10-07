import React, { useContext } from 'react';
import Store from '../store/initialStore';
import WidgetUrlGenerator from './WidgetUrlGenerator';

const WidgetContent = () => {
  const { activeTab } = useContext(Store);
  return (
    <div className="WidgetContent">
      {activeTab === 'generator' && <WidgetUrlGenerator />}
    </div>
  );
};

export default WidgetContent;
