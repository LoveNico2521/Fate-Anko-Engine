function executeRoll(type) {
  playAnimation();  // 执行
  
  let count = parseInt(countInput.value) || 1;
  count = Math.max(1, Math.min(20, count));
  countInput.value = count;
  
  const boost = parseInt(boostInput.value) || 0;
  
  let targetVal = parseInt(targetValueInput.value) || 50;
  targetVal = Math.max(1, Math.min(100, targetVal));
  targetValueInput.value = targetVal;

  saveSettings(); // ← 如果 localStorage 抛异常，后续代码全被跳过！

  emptyState.classList.add('hidden');
  chainFlowDisplay.classList.remove('hidden');
  ...