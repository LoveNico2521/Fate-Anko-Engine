} else if (isCF) {
  step.outcome = 'DF-Trigger';
  if (!initialChainOutcome) initialChainOutcome = '大失敗';
  currentStack++;
  currentLevel++;
  step.msg = `🎲 1d100 = ${raw100} (CF: ${boostMode100 === 'v3' ? '最終值<=5' : '原始值<=5'}) ➔ 進入 s${currentLevel} (1d10)！ (${checkDetail})`;
  steps.push(step);
  continueLoop = true;
}