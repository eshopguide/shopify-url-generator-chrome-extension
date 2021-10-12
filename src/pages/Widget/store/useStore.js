import { useState } from 'react';

const useStore = () => {
  const [activeTab, setActiveTab] = useState('generator');
  const [disablePreviewbar, setDisablePreviewbar] = useState(false);
  const [history, setHistory] = useState([]);

  return {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    settings: {
      disablePreviewbar: disablePreviewbar,
      setDisablePreviewbar: setDisablePreviewbar,
    },
    history: history,
    setHistory: setHistory,
  };
};

export default useStore;
