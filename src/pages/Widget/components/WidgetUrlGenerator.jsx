import React, { useContext, useState } from 'react';
import Store from '../store/initialStore';
import cN from 'classnames';

const WidgetUrlGenerator = () => {
  const { shopify } = useContext(Store);
  const [urlGenerated, setUrlGenerated] = useState(false);

  const generatePreviewUrl = (shopifyObject) => {
    const href = window.location.href;
    const search = window.location.search;
    let previewQuery = '';

    if (search) {
      previewQuery = '&preview_theme_id=';
    } else {
      previewQuery = '?preview_theme_id=';
    }

    navigator.clipboard.writeText(href + previewQuery + shopifyObject.theme.id);
  };

  const onClickButtonHandler = () => {
    if (shopify) {
      console.log(shopify);
      generatePreviewUrl(shopify);
      setUrlGenerated(true);
    }
  };

  return (
    <div
      className={cN('WidgetUrlGenerator', {
        'WidgetUrlGenerator--default': !urlGenerated,
        'WidgetUrlGenerator--success': urlGenerated,
      })}
    >
      {shopify && (
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
      )}
    </div>
  );
};

export default WidgetUrlGenerator;
