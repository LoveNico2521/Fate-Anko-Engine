if (dieType === '1d100') {
    let sides = 100;
    if (boostMode100 === 'v1' || boostMode100 === 'v3') {
        sides = Math.max(1, 100 - boost); // 标准公式：1d(100-Boost)
    }
    const raw100 = getRnd(sides, debugSeq, state);
    const final100 = raw100 + boost;
    // ... 其余逻辑
}