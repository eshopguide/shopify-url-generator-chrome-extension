import React, { useContext } from 'react';
import Store from '../store/initialStore';
import cN from 'classnames';

const WidgetSettings = () => {
  const contextValue = useContext(Store);
  const { settings } = useContext(Store);

  const onClickHandler = () => {
    settings.setDisablePreviewbar(!settings.disablePreviewbar);
  };

  return (
    <div className={cN('WidgetSettings')}>
      <div className="WidgetSettings__Entry">
        <div className="WidgetSettings__Headline">Preview Settings</div>
        <ul className="WidgetSettings__List">
          <li
            onClick={() => onClickHandler(contextValue)}
            className="WidgetSettings__Listitem WidgetSettings__Checkbox"
          >
            <input
              type="checkbox"
              id="disable_previewbar"
              name="disable_previewbar"
              checked={settings.disablePreviewbar}
              readOnly
            />
            <div>Disable Previewbar for links</div>
          </li>
        </ul>
        <div>More settings coming soon!</div>
      </div>
    </div>
  );
};

export default WidgetSettings;
