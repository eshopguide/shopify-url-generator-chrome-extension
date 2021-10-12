import React from 'react';
import { render } from 'react-dom';

import Widget from './Widget';
import root from 'react-shadow';
import './index.css';

render(
  <root.div>
    <Widget />
  </root.div>,
  window.document.querySelector('#shopify-url-generator')
);

if (module.hot) module.hot.accept();
