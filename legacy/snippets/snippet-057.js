allRuns.forEach(run => {
  run.steps.forEach(s => {
    totalSum += s.final;
    
    if (boost !== 0) {
      const boostStr = boost > 0 ? `+${boost}` : `${boost}`;
      formulaParts.push(`(${s.raw}${boostStr})`);
    } else {
      formulaParts.push(`${s.raw}`);
    }
  });
});