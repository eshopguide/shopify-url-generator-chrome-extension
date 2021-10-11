import React from 'react';

const defaultStore = {
  activeTab: 'generator',
  setActiveTab: () => {},
  settings: {
    disablePreviewbar: false,
    setDisablePreviewbar: () => {},
  },
  previewHistory: [],
  setPreviewHistory: () => {},
};

const Store = React.createContext(defaultStore);

export default Store;
