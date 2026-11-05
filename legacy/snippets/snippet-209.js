const parts = allRuns.map(run => {
    const lastStep = run.steps[run.steps.length - 1];
    const delta = lastStep.final - lastStep.raw;
    return delta !== 0 ? `(${lastStep.raw}${delta > 0 ? '+' : ''}${delta})` : `${lastStep.raw}`;
});