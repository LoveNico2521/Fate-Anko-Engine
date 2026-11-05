function loadSettings() {
  const savedSettings = localStorage.getItem('fate_dreamweaver_settings');
  if (savedSettings) {
    const s = JSON.parse(savedSettings);
    ...
  }