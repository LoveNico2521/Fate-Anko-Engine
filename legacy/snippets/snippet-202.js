if (dieType === '1d100') {
  let sides = 100;
  let final100;
  if (boostMode100 === 'v1') {
    sides = Math.max(1, 100 - boost);
    const raw100 = getRnd(sides, debugSeq, state);
    final100 = raw100 + boost;
    // ... CF = raw <= 5
  } else if (boostMode100 === 'v2') {
    const raw100 = getRnd(sides, debugSeq, state);
    final100 = raw100 + boost;
    // ... CF = raw <= 5
  } else if (boostMode100 === 'v3') {
    sides = Math.max(1, 100 - Math.abs(boost));
    const raw100 = getRnd(sides, debugSeq, state);
    final100 = boost >= 0 ? raw100 + boost : raw100; // 👈 关键修改：正数才加，负数不加
    // ... CF = final100 <= 5
  }
  // ...
}