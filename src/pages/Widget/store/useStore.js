import { useState } from 'react';

const useStore = () => {
  const [activeTab, setActiveTab] = useState('generator');
  const [disablePreviewbar, setDisablePreviewbar] = useState(false);

  return {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    settings: {
      disablePreviewbar: disablePreviewbar,
      setDisablePreviewbar: setDisablePreviewbar,
    },
  };
};

export default useStore;
