import { useState } from 'react';

const useStore = () => {
  const [shopify, setShopify] = useState(null);

  return {
    shopify: shopify,
    setShopify: setShopify,
  };
};

export default useStore;
