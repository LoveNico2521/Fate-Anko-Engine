let totalSum = 0;
let formulaParts = [];
let hasChain = false;
let chainTriggerSum = 0; // 可选：触发器的总和

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
        partStr = `<span class="text-amber-400 font-bold">${partStr}</span>`; // 高亮触发器
    }
    formulaParts.push(partStr);
});