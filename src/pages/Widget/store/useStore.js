import { useState } from 'react';

const useStore = () => {
  const [activeTab, setActiveTab] = useState('generator');
  const [disablePreviewbar, setDisablePreviewbar] = useState(false);
  const [previewHistory, setPreviewHistory] = useState([]);

  return {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    settings: {
      disablePreviewbar: disablePreviewbar,
      setDisablePreviewbar: setDisablePreviewbar,
    },
    previewHistory: previewHistory,
    setPreviewHistory: setPreviewHistory,
  };
};

export default useStore;
