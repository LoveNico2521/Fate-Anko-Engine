let sides = 100;
if (boostMode100 === 'v1' || boostMode100 === 'v3') {
  sides = Math.max(1, 100 - boost);
}
const raw100 = getRnd(sides, debugSeq, state);
const final100 = raw100 + boost;