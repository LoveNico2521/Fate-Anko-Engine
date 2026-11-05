function renderTotalSum(allRuns, boost) {
  let totalSum = 0;
  let nonTriggerSum = 0;
  let formulaParts = [];
  let hasTrigger = false;

  allRuns.forEach(run => {
    // Find the last s0 step
    let s0Step = null;
    for (let i = run.steps.length - 1; i >= 0; i--) {
      if (run.steps[i].levelStr === 's0') {
        s0Step = run.steps[i];
        break;
      }
    }
    if (!s0Step) s0Step = run.steps[0];

    const isTrigger = run.steps.length > 1;
    
    totalSum += s0Step.final;
    if (isTrigger) hasTrigger = true;
    else nonTriggerSum += s0Step.final;
    
    const delta = s0Step.final - s0Step.raw;
    let partStr = delta !== 0 ? `(${s0Step.raw}${delta > 0 ? '+' : ''}${delta})` : `${s0Step.raw}`;
    
    if (isTrigger) partStr = `<span class="text-amber-400 font-bold" title="觸發連鎖">${partStr}</span>`; 
    formulaParts.push(partStr);
  });
  // ... same as before
}