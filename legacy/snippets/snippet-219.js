function renderTotalSum(allRuns, boost) {
  let totalSum = 0;
  let nonTriggerSum = 0;
  let formulaParts = [];
  let hasTrigger = false;

  allRuns.forEach(run => {
    let s0Step = null;
    for (let i = run.steps.length - 1; i >= 0; i--) {
      if (run.steps[i].levelStr === 's0') {
        s0Step = run.steps[i];
        break;
      }
    }
    if (!s0Step) s0Step = run.steps[0];
    // ...