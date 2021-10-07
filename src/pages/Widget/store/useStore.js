import { useState } from 'react';

const useStore = () => {
  const [shopify, setShopify] = useState(null);
  const [activeTab, setActiveTab] = useState('generator');

  return {
    shopify: shopify,
    setShopify: setShopify,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };
};

export default useStore;
