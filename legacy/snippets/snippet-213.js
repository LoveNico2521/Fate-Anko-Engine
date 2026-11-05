// Find the LAST s0 step
let s0Step = run.steps.find(s => s.levelStr === 's0');
for (let i = run.steps.length - 1; i >= 0; i--) {
    if (run.steps[i].levelStr === 's0') {
        s0Step = run.steps[i];
        break;
    }
}