const stepBoost = s.final - s.raw;
if (stepBoost !== 0) {
  const boostStr = stepBoost > 0 ? `+${stepBoost}` : `${stepBoost}`;
  formulaParts.push(`(${s.raw}${boostStr})`);
} else {
  formulaParts.push(`${s.raw}`);
}