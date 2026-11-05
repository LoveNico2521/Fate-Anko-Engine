if (dieType === '1d100') {
  let raw100;
  let boostMode = document.getElementById('boost-mode-100').value;
  if (boostMode === 'v1') {
    const sides = Math.max(1, 100 - boost);
    raw100 = Math.floor(Math.random() * sides) + 1;
  } else {
    raw100 = Math.floor(Math.random() * 100) + 1;
  }
  const final100 = raw100 + boost;
  // 使用 final100 进行判定
  if (final100 <= 5) { ... }
  else if (final100 >= 96) { ... }
}