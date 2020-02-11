/*----------------------- SESSION STORAGE -----------------------*/
export const SessionStorageSaveItem = (key, item) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const SessionStorageGetItem = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const SessionStorageRemoveItem = (key) => {
  sessionStorage.removeItem(key);
};

export const SessionStorageClear = () => {
  sessionStorage.clear();
};

/*----------------------- LOCAL STORAGE -----------------------*/
export const LocalStorageSaveItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const LocalStorageGetItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const LocalStorageRemoveItem = (key) => {
  localStorage.removeItem(key);
};

export const LocalStorageClear = () => {
  localStorage.clear()
};
