if (autoCopyToggle.checked) {
  const parts = allRuns.map(run => {
    let s0Step = null;
    for (let i = run.steps.length - 1; i >= 0; i--) {
      if (run.steps[i].levelStr === 's0') {
        s0Step = run.steps[i];
        break;
      }
    }
    if (!s0Step) s0Step = run.steps[0];
    
    const delta = s0Step.final - s0Step.raw;
    return delta !== 0 ? `(${s0Step.raw}${delta > 0 ? '+' : ''}${delta})` : `${s0Step.raw}`;
  });
  // ...
}