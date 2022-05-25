// setItem
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
// getItem
export const getItem = (key) => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};
// removeItem
export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};
// clear
export const removeAllItem = () => {
  window.localStorage.clear();
};
