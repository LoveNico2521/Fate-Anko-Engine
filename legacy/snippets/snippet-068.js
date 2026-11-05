function executeRoll(type) {
  playAnimation();
  
  let count = parseInt(countInput.value) || 1;
  count = Math.max(1, Math.min(20, count));
  countInput.value = count;
  
  const boost = parseInt(boostInput.value) || 0;
  ...