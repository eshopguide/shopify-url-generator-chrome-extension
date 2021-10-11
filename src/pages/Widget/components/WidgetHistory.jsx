import React, { useContext, useEffect, useCallback, useState } from 'react';
import Store from '../store/initialStore';
import lodash from 'lodash';
import WidgetHistoryListItems from './WidgetHistoryListItems';

const WidgetHistory = () => {
  const { previewHistory, setPreviewHistory } = useContext(Store);
  const [historyGroupByShop, setHistoryGroupByShop] = useState(
    lodash.groupBy(previewHistory, 'shop')
  );

  const onItemClick = useCallback((url) => () => {
    const removeIndex = previewHistory.findIndex((item) => item.url === url);
    previewHistory.splice(removeIndex, 1);
    setHistoryGroupByShop(lodash.groupBy(previewHistory, 'shop'));
  });

  useEffect(() => {
    setPreviewHistory(previewHistory);
  }, [historyGroupByShop]);

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
