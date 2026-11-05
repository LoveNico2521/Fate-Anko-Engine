} else {
  if (currentStack > 0) currentStack--;
  if (currentLevel > 0) {
    currentLevel--;
    let prevDie = getDieType(currentLevel);
    step.msg = `${currentOutcome === '大成功' ? '✨' : '💥'} 1d10=10 ➔ 1d2=${d2} (${currentOutcome})！與基準 (${initialChainOutcome}) 反向 ➔ 退回 s${currentLevel} (${prevDie})！`;
  } else {
    step.msg = `${currentOutcome === '大成功' ? '✨' : '💥'} 1d10=10 ➔ 1d2=${d2} (${currentOutcome})！與基準 (${initialChainOutcome}) 反向 ➔ 退回起始層 s0！`;
  }
}