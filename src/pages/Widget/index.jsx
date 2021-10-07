import React from 'react';
import { render } from 'react-dom';

import Widget from './Widget';
import './index.css';

render(<Widget />, window.document.querySelector('#shopify-url-generator'));

if (module.hot) module.hot.accept();
