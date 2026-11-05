function adjustBoost(delta) {
  let val = parseInt(boostInput.value) || 0;
  boostInput.value = val + delta;
  saveSettings();
}