let finalS0Step = null;
for (let i = run.steps.length - 1; i >= 0; i--) {
    if (run.steps[i].levelStr === 's0') {
        finalS0Step = run.steps[i];
        break;
    }
}
if (!finalS0Step) finalS0Step = run.steps[0]; // Fallback