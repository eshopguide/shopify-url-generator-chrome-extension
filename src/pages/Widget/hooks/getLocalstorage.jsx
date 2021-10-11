import { useContext, useEffect } from 'react';
import Store from '../store/initialStore';
import setLocalStorage from './setLocalStorage';

const getLocalstorage = () => {
  const storeValue = useContext(Store);
  const {
    activeTab,
    setActiveTab,
    settings,
    previewHistory,
    setPreviewHistory,
  } = useContext(Store);

  useEffect(() => {
    function useCopyOfLocalstorage() {
      const storeDataObject = JSON.parse(
        localStorage.getItem('storeDataObject')
      );

      setActiveTab(storeDataObject.activeTab);
      settings.setDisablePreviewbar(storeDataObject.settings.disablePreviewbar);
      setPreviewHistory(storeDataObject.previewHistory);
    }

    if (localStorage.getItem('storeDataObject')) {
      useCopyOfLocalstorage();
    }

    window.addEventListener('storage', (e) => {
      useCopyOfLocalstorage();
    });
  }, []);

  useEffect(() => {
    setLocalStorage(storeValue);
  }, [activeTab, settings, previewHistory]);
};

export default getLocalstorage;
