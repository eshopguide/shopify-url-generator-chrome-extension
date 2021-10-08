import React, { useContext, useState } from 'react';
import Store from '../store/initialStore';
import cN from 'classnames';

const WidgetUrlGenerator = () => {
  const { shopify, settings } = useContext(Store);
  const [urlGenerated, setUrlGenerated] = useState(false);

  const generatePreviewUrl = (shopifyObject) => {
    const location = window.location;
    const href = window.location.href;
    const search = window.location.search;
    let url = '';
    let disablePreviewbar = '&pb=0';
    let generatedUrl = '';

    if (search && !search.includes('key')) {
      url = href + '&preview_theme_id=';
    } else if (search.includes('key')) {
      url = location.origin + location.pathname + '?preview_theme_id=';
    } else {
      url = href + '?preview_theme_id=';
    }

    if (settings.disablePreviewbar) {
      generatedUrl = url + shopifyObject.theme.id + disablePreviewbar;
      navigator.clipboard.writeText(generatedUrl);
    } else {
      generatedUrl = url + shopifyObject.theme.id;
      navigator.clipboard.writeText(generatedUrl);
    }
  };

  const onClickButtonHandler = () => {
    if (shopify) {
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
