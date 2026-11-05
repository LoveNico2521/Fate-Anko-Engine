} else {
  const sides = parseInt(dieType.replace('d', ''));
  const raw = Math.floor(Math.random() * sides) + 1;
  const final = raw + boost;
  let isSuccess = (mode === 'ra') ? (final <= targetVal) : (final >= targetVal);
  let checkDetail = `[${mode.toUpperCase()} ${mode === 'ra' ? '<=' : '>='} ${targetVal}] ➔ ${isSuccess ? '✅ 成功' : '❌ 失敗'}`;
  steps.push({ levelStr, type: dieType, raw, final, extraD2: null, outcome: null, msg: `擲出 ${dieType} ➔ 原始: ${raw} | ${checkDetail}`, checkDetail });
  continueLoop = false;
}