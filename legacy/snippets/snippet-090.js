allRuns.forEach(run => {
  run.steps.forEach(s => {
    totalSum += s.final;
    
    // 从 final - raw 判断实际的 boost 差值（保险机制）
    const stepBoost = s.final - s.raw;
    if (stepBoost !== 0) {
      const boostStr = stepBoost > 0 ? `+${stepBoost}` : `${stepBoost}`;
      formulaParts.push(`(${s.raw}${boostStr})`);
    } else {
      formulaParts.push(`${s.raw}`);
    }
  });
});