import React, { useContext, useEffect, useCallback, useState } from 'react';
import Store from '../store/initialStore';
import lodash from 'lodash';
import WidgetHistoryListItems from './WidgetHistoryListItems';

const WidgetHistory = () => {
  const { history, setHistory } = useContext(Store);
  const [historyGroupByShop, setHistoryGroupByShop] = useState(
    lodash.groupBy(history, 'shop')
  );

  const onItemClick = useCallback((url) => () => {
    let historyArr = history;
    historyArr = historyArr.filter((item) => item.url !== url);
    setHistoryGroupByShop(lodash.groupBy(historyArr, 'shop'));
    setHistory(historyArr);
  });

  useEffect(() => {}, [historyGroupByShop]);

  return (
    <div className="WidgetHistory">
      {Object.keys(historyGroupByShop).map((shopKey, shopIndex) => {
        const shopKeys = historyGroupByShop[shopKey];
        const historyGroupByTheme = lodash.groupBy(shopKeys, 'name');

        return (
          <div className="WidgetHistory__List" key={shopKey + shopIndex}>
            <>
              <div className="WidgetHistory__Store">{shopKey}</div>
              {Object.keys(historyGroupByTheme).map((themeKey, themeIndex) => {
                const themeKeys = historyGroupByTheme[themeKey];

                return (
                  <WidgetHistoryListItems
                    key={themeKey}
                    themeKeys={themeKeys}
                    themeKey={themeKey}
                    themeIndex={themeKey + themeIndex}
                    onClick={onItemClick}
                  />
                );
              })}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetHistory;
