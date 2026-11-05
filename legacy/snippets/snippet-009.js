if (currentLevel > 0) {
  currentLevel--;
  let prevDie = getDieType(currentLevel);
  step.msg = `...與基準 (${initialChainOutcome}) 反向 ➔ 退回 s${currentLevel} (${prevDie})！`;
} else {
  step.msg = `...與基準 (${initialChainOutcome}) 反向 ➔ 退回頂層 s0！`;
}