const parts = allRuns.map(run => {
  const step = run.steps[0];
  const b = boost;
  if (b === 0) {
    return `${step.raw}`; // 如果加值为 0，不加括号
  } else {
    return `(${step.raw}${b > 0 ? '+' : ''}${b})`;
  }
});
const prefix = count + 'd' + (type.includes('d') ? type.split('d')[1] : type);
const formulaString = `${prefix}=${parts.join('+')}=${totalSum}`; // 为了整洁，移除了总和的括号