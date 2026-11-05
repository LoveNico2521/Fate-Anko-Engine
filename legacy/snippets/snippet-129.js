function adjustCount(delta) {
  let val = Number(countInput.value) || 1;
  val = Math.max(1, Math.min(20, val + delta));
  countInput.value = val;
  saveSettings();
}