const setLocalStorage = (storeDataObject) => {
  localStorage.setItem('storeDataObject', JSON.stringify(storeDataObject));
};

export default setLocalStorage;
