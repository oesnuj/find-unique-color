const store = {
  setSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSessionStorage(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
};

module.exports = store;
