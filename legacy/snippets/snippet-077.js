} else if (raw100 >= 96) {
  const currentOutcome = '大成功';
  if (!initialChainOutcome) initialChainOutcome = currentOutcome;
  currentStack++;
  step.outcome = currentOutcome;
  currentLevel++;
  step.msg = `✨ 1d100 = ${raw100} (96~100: 大成功) ➔ 进入 s${currentLevel} (1d10)！ | ${checkDetail}`;
  steps.push(step);
  continueLoop = true;
}