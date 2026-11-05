const currentOutcome = (d2 === 1) ? '大成功' : '大失敗';
step.outcome = currentOutcome;

if (!initialChainOutcome) {
  initialChainOutcome = currentOutcome;
}

if (currentOutcome === initialChainOutcome) {
  // 同向 ➔ +1 Stack