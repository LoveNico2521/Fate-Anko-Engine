const parts = allRuns.map(run => {
  const step = run.steps[0];
  const b = boost;
  return b !== 0 ? `(${step.raw}${b > 0 ? '+' : ''}${b})` : `${step.raw}`;
});