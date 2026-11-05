// 保险机制：确保 boost 与输入框一致
if (boostInput.value !== "" && parseInt(boostInput.value) !== boost) {
  console.warn('[Fate] boost 不一致，强制修正');
}