function loadSettings() {
  const savedSettings = localStorage.getItem('fate_dreamweaver_settings');
  if (savedSettings) {
    const s = JSON.parse(savedSettings);
    countInput.value = s.count || 1;
    boostInput.value = s.boost || 0;
    targetValueInput.value = s.target || 50;
    setCheckMode(s.mode || 'ra');
  }
  ...
}