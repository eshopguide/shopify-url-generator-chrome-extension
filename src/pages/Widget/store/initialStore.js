import React from 'react';

const defaultStore = {
  shopify: null,
  setShopify: () => {},
};

const Store = React.createContext(defaultStore);

export default Store;
