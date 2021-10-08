import React from 'react';
import useStore from './store/useStore';
import Store from './store/initialStore';

import WidgetContainer from './components/WidgetContainer';

const Widget = () => {
  let StoreData = useStore();

  return (
    <Store.Provider value={StoreData}>
      <WidgetContainer />
    </Store.Provider>
  );
};

export default Widget;
