const parts = allRuns.map(run => {
  const step = run.steps[0];
  const b = boost;
  return b !== 0 ? `(${step.raw}${b > 0 ? '+' : ''}${b})` : `(${step.raw})`;
});
const prefix = count + 'd' + (type.includes('d') ? type.split('d')[1] : type);
const formulaString = `${prefix}=${parts.join('+')}=(${totalSum})`;