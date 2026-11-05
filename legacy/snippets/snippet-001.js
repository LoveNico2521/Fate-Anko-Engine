if (currentOutcome === initialChainOutcome) {
  currentStack++;
  currentLevel++;
  ...
} else {
  if (currentStack > 0) currentStack--;
  if (currentLevel > 0) {
    currentLevel--;
    ...
  }
  ...
}