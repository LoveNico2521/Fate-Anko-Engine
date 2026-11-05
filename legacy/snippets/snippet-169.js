function loadSettings() {
  ...
  const autoCopyToggle = document.getElementById('auto-copy-toggle');
  if (s && s.autoCopy) autoCopyToggle.checked = true;
}

function saveSettings() {
  safeSet('fate_dreamweaver_settings', {
    count: Number(countInput.value) || 1,
    boost: Number(boostInput.value) || 0,
    target: Number(targetValueInput.value) || 50,
    mode: checkMode,
    autoCopy: document.getElementById('auto-copy-toggle').checked
  });
}