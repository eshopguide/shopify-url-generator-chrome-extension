import React, { useState, useContext, useEffect } from 'react';
import cN from 'classnames';
import generatePreviewUrl from '../helper/generatePreviewUrl';
import generateHistoryObject from '../helper/generateHistoryObject';
import Store from '../store/initialStore';

const WidgetUrlGenerator = () => {
  const shopify = window.Shopify;
  const [urlGenerated, setUrlGenerated] = useState(false);
  const { settings, history, setHistory } = useContext(Store);

  const onClickButtonHandler = (type) => {
    if (shopify) {
      setUrlGenerated(true);

      generatePreviewUrl(shopify, settings, type);
      setHistory(
        generateHistoryObject(
          shopify,
          history,
          generatePreviewUrl(shopify, settings, type)
        )
      );
    }
  };

  useEffect(() => {
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
          <div className='WidgetUrlGenerator__Buttons'>
            <div
              onClick={() => onClickButtonHandler("preview")}
              className="WidgetUrlGenerator__Button"
            >
              Preview Link
            </div>
            <div
              onClick={() => onClickButtonHandler("editor")}
              className="WidgetUrlGenerator__Button"
            >
              Preview + Editor Link
            </div>
          </div>
        </div>
        <div className="WidgetUrlGenerator__Response">
          <div className="WidgetUrlGenerator__Headline">
            <div>
              Link for {shopify.theme.name} copied to your clipboard.
            </div>
          </div>
          <div
            onClick={() => setUrlGenerated(false)}
            className="WidgetUrlGenerator__Button"
          >
            Generate new links
          </div>
        </div>
      </>
    </div>
  );
};

export default WidgetUrlGenerator;
