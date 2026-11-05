let totalSum = 0;
let nonTriggerSum = 0;
let formulaParts = [];

allRuns.forEach(run => {
    const initialStep = run.steps[0];
    const isTrigger = run.steps.length > 1;
    
    totalSum += initialStep.final;
    if (!isTrigger) {
        nonTriggerSum += initialStep.final;
    }
    
    let partStr = '';
    if (boost !== 0) {
        const boostStr = boost > 0 ? `+${boost}` : `${boost}`;
        partStr = `(${initialStep.raw}${boostStr})`;
    } else {
        partStr = `${initialStep.raw}`;
    }
    
    if (isTrigger) {
        partStr = `<span class="text-amber-400 font-bold" title="觸發連鎖">${partStr}</span>`; 
    }
    formulaParts.push(partStr);
});