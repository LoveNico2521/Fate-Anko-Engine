if (dieType === '1d100') {
  let raw100;
  if (boostMode100 === 'v1') {
    const sides = Math.max(1, 100 - boost);
    raw100 = getRnd(sides, debugSeq, state);
  } else {
    raw100 = getRnd(100, debugSeq, state);
  }
  const final100 = raw100 + boost;
  // ... 判定使用 final100
}