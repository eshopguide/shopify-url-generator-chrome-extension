import React from 'react';

const WidgetHeader = () => {
  return (
    <div className="WidgetHeader">
      <div className="WidgetHeader__tab active">
        <div className="Tab__Content">Generator</div>
      </div>
      <div className="WidgetHeader__tab WidgetHeader__Disabled">
        <div className="Tab__Content">History</div>
      </div>
    </div>
  );
};

export default WidgetHeader;
