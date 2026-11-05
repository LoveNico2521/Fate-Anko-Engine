const parts = allRuns.map(run => {
  const step = run.steps[0];
  const delta = step.final - step.raw;
  return delta !== 0 ? `(${step.raw}${delta > 0 ? '+' : ''}${delta})` : `${step.raw}`;
});
const prefix = count + 'd' + (type.includes('d') ? type.split('d')[1] : type);
const formulaString = `${prefix}=${parts.join('+')}=${totalSum}`;