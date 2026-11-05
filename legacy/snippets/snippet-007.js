for (let i = 0; i < count; i++) {
  const run = rollChainEngine(type, boost, targetVal, checkMode);
  allRuns.push(run);
  ...
}
...
addHistory(summaryText);