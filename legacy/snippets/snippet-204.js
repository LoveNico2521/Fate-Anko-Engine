let delta = initialStep.final - initialStep.raw;
let partStr = delta !== 0 ? `(${initialStep.raw}${delta > 0 ? '+' : ''}${delta})` : `${initialStep.raw}`;