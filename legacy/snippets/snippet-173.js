const parts = allRuns.map(run => {
  const step = run.steps[0];
  const b = boost;
  return b !== 0 ? `(${step.raw}${b > 0 ? '+' : ''}${b})` : `${step.raw}`; // 如果加值为 0，移除括号
});
const prefix = count + 'd' + (type.includes('d') ? type.split('d')[1] : type);
const formulaString = `${prefix}=${parts.join('+')}=${totalSum}`; // 为了整洁，移除了总和的括号，或者保留为 =(${totalSum})