import { useState } from 'react';

const useStore = () => {
  const [shopify, setShopify] = useState(null);
  const [activeTab, setActiveTab] = useState('generator');
  const [disablePreviewbar, setDisablePreviewbar] = useState(false);

  return {
    shopify: shopify,
    setShopify: setShopify,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    settings: {
      disablePreviewbar: disablePreviewbar,
      setDisablePreviewbar: setDisablePreviewbar,
    },
  };
};

export default useStore;
