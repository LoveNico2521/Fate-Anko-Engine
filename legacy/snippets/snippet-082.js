allRuns.forEach(run => {
  run.steps.forEach(s => {
    totalSum += s.final;
    
    // 用 s.final - s.raw 判断每步实际的 boost 贡献
    const stepBoost = s.final - s.raw;
    if (stepBoost !== 0) {
      const boostStr = stepBoost > 0 ? `+${stepBoost}` : `${stepBoost}`;
      formulaParts.push(`(${s.raw}${boostStr})`);
    } else {
      formulaParts.push(`${s.raw}`);
    }
  });
});