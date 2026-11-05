allRuns.forEach(run => {
    const lastStep = run.steps[run.steps.length - 1];
    const isTrigger = run.steps.length > 1;
    
    totalSum += lastStep.final;
    if (isTrigger) hasTrigger = true;
    else nonTriggerSum += lastStep.final;
    
    const delta = lastStep.final - lastStep.raw;
    let partStr = delta !== 0 ? `(${lastStep.raw}${delta > 0 ? '+' : ''}${delta})` : `${lastStep.raw}`;
    
    if (isTrigger) partStr = `<span class="text-amber-400 font-bold" title="觸發連鎖">${partStr}</span>`; 
    formulaParts.push(partStr);
});