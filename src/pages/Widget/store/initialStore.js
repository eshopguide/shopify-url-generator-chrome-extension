import React from 'react';

const defaultStore = {
  shopify: null,
  setShopify: () => {},
  activeTab: 'generator',
  setActiveTab: () => {},
  settings: {
    disablePreviewbar: false,
    setDisablePreviewbar: () => {},
  },
};

const Store = React.createContext(defaultStore);

export default Store;
