import React, { useState, useContext, useEffect } from 'react';
import cN from 'classnames';
import generatePreviewUrl from '../helper/generatePreviewUrl';
import generateHistoryObject from '../helper/generateHistoryObject';
import Store from '../store/initialStore';

const WidgetUrlGenerator = () => {
  const shopify = window.Shopify;
  const [urlGenerated, setUrlGenerated] = useState(false);
  const { settings, history, setHistory } = useContext(Store);

  const onClickButtonHandler = () => {
    if (shopify) {
      setUrlGenerated(true);
    }
  };

  useEffect(() => {
    if (urlGenerated) {
      generatePreviewUrl(shopify, settings);
      setHistory(
        generateHistoryObject(
          shopify,
          history,
          generatePreviewUrl(shopify, settings)
        )
      );
    }
  }, [urlGenerated]);

  return (
    <div
      className={cN('WidgetUrlGenerator', {
        'WidgetUrlGenerator--default': !urlGenerated,
        'WidgetUrlGenerator--success': urlGenerated,
      })}
    >
      <>
        <div className="WidgetUrlGenerator__Action">
          <div className="WidgetUrlGenerator__Image-Container">
            <img
              src="https://i.postimg.cc/RCHpzJ7y/pickachu.gif"
              width="120"
              height="auto"
            />
          </div>
          <div className="WidgetUrlGenerator__Headline">
            We're ready, how about you?
          </div>
          <div
            onClick={() => onClickButtonHandler()}
            className="WidgetUrlGenerator__Button"
          >
            Get The Preview Link
          </div>
        </div>
        <div className="WidgetUrlGenerator__Response">
          <div className="WidgetUrlGenerator__Headline">
            <div>
              Preview Link for {shopify.theme.name} copied to your clipboard.
            </div>
          </div>
          <div
            onClick={() => setUrlGenerated(false)}
            className="WidgetUrlGenerator__Button"
          >
            New Preview Link
          </div>
        </div>
      </>
    </div>
  );
};

export default WidgetUrlGenerator;
