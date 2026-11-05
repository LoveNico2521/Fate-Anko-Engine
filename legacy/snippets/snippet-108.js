let totalSum = 0;
let formulaParts = [];

allRuns.forEach(run => {
    const initialStep = run.steps[0];
    const isTrigger = run.steps.length > 1;
    
    totalSum += initialStep.final;
    
    let partStr = '';
    if (boost !== 0) {
        const boostStr = boost > 0 ? `+${boost}` : `${boost}`;
        partStr = `(${initialStep.raw}${boostStr})`;
    } else {
        partStr = `${initialStep.raw}`;
    }
    
    if (isTrigger) {
        partStr = `<span class="text-amber-400 font-bold" title="連鎖觸發">${partStr}</span>`; 
    }
    formulaParts.push(partStr);
});