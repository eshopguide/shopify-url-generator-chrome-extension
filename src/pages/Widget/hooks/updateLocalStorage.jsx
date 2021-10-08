const updateLocalStorage = (storeDataObject) => {
  localStorage.setItem('storeDataObject', JSON.stringify(storeDataObject));
};

export default updateLocalStorage;
