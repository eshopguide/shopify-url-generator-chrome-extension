import React from 'react';
import useStore from './store/useStore';
import Store from './store/initialStore';

import WidgetContainer from './components/WidgetContainer';
import css from './Widget.css';

const Widget = () => {
  let StoreData = useStore();

  return (
    <Store.Provider value={StoreData}>
      <style type="text/css">{css}</style>

      <div className="Widget">
        <WidgetContainer />
      </div>
    </Store.Provider>
  );
};

export default Widget;
