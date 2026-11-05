function safeLocalStorageGet(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    if (!val) return fallback;
    return JSON.parse(val);
  } catch (e) {
    console.warn('localStorage get failed for', key, e);
    return fallback;
  }
}

function safeLocalStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage set failed for', key, e);
  }
}