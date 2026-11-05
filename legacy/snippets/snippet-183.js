function rollChainEngine(startType, boost, targetVal, mode, debugSeq, state, boostMode100) {
  // ...
  if (dieType === '1d100') {
    let raw100;
    if (boostMode100 === 'v1') {
      const sides = Math.max(1, 100 - boost);
      raw100 = getRnd(sides, debugSeq, state);
    } else {
      raw100 = getRnd(100, debugSeq, state);
    }
    const final100 = raw100 + boost;
    // ...
    if (final100 <= 5) { // 使用 final100 进行触发
      // ...
    } else if (final100 >= 96) { // 使用 final100 进行触发
      // ...
    }
  }
}