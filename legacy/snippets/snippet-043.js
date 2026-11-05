function getRunDetails(run) {
  return run.steps.map(s => {
    let str = `[${s.levelStr}] ${s.type}=${s.raw}`;
    if (s.extraD2) str += `(1d2=${s.extraD2})`;
    return str;
  }).join(' ➔ ');
}