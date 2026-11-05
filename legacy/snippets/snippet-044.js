let detailParts = allRuns.map((run, idx) => {
  let runStr = getRunDetails(run);
  if (count > 1) {
    return `#${idx+1}: ${runStr}`;
  }
  return runStr;
});
const detailText = detailParts.join(' | ');
const summaryText = `${count}x ${type}${boostText} [${checkMode.toUpperCase()}:${targetVal}] ➔ 淨計: ${totalSuccessStacks}成功 / ${totalFailStacks}失敗`;
const fullLog = `${summaryText}<br><span class="text-slate-400 text-[10px]">${detailText}</span>`;
addHistory(fullLog);