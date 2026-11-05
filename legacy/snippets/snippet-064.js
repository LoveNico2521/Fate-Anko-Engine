function loadSettings() {
  const s = safeGet('fate_dreamweaver_settings', null);
  if (s) {
    countInput.value = s.count || 1;
    boostInput.value = s.boost || 0;
    ...
  }
}