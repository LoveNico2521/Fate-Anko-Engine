function saveSettings() {
  safeSet('fate_dreamweaver_settings', {
    count: parseInt(countInput.value) || 1,
    boost: parseInt(boostInput.value) || 0,
    ...
  });
}