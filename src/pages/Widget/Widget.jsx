import React, { useEffect } from 'react';
import useStore from './store/useStore';
import Store from './store/initialStore';

import WidgetContainer from './components/WidgetContainer';

const Widget = () => {
  const StoreData = useStore();

  useEffect(() => {
    console.log(StoreData);
  }, [StoreData]);

  return (
    <Store.Provider value={StoreData}>
      <WidgetContainer />
    </Store.Provider>
  );
};

export default Widget;
