let totalSum = 0;
let formulaParts = [];
allRuns.forEach(run => {
    run.steps.forEach(s => {
        if (s.type !== '1d2') { // 如果未來有 1d2 的獨立 step，可以排除
            totalSum += s.final;
            if (boost !== 0) {
                formulaParts.push(`(${s.raw}${boost > 0 ? '+' : ''}${boost})`);
            } else {
                formulaParts.push(`${s.raw}`);
            }
        }
    });
});
if (formulaParts.length > 1) {
    document.getElementById('total-summary').innerHTML = `總和：${formulaParts.join(' + ')} = <span class="text-amber-400 text-lg">${totalSum}</span>`;
    document.getElementById('total-summary').classList.remove('hidden');
} else {
    document.getElementById('total-summary').classList.add('hidden');
}