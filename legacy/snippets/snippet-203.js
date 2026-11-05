if (dieType === '1d100') {
  let sides = 100;
  let raw100, final100;
  let isCF = false;
  let isCS = false;

  if (boostMode100 === 'v1') {
    sides = Math.max(1, 100 - boost);
    raw100 = getRnd(sides, debugSeq, state);
    final100 = raw100 + boost;
    isCF = (raw100 <= 5);
    isCS = (final100 >= 96);
  } else if (boostMode100 === 'v2') {
    sides = 100;
    raw100 = getRnd(sides, debugSeq, state);
    final100 = raw100 + boost;
    isCF = (raw100 <= 5);
    isCS = (final100 >= 96);
  } else if (boostMode100 === 'v3') {
    sides = Math.max(1, 100 - Math.abs(boost));
    raw100 = getRnd(sides, debugSeq, state);
    final100 = (boost >= 0) ? (raw100 + boost) : raw100;
    isCF = (final100 <= 5);
    isCS = (final100 >= 96);
  }
  // ... 后续逻辑
}