if (formulaParts.length > 1 || boost !== 0) {
    let sumHtml = `🧮 本輪總和：<span class="font-mono text-slate-400 mx-2">${formulaParts.join(' + ')}</span> = <span class="text-amber-400 text-lg md:text-xl ml-1">${totalSum}</span>`;
    if (hasTrigger) {
        sumHtml += `<span class="ml-3 text-xs text-slate-500 font-normal">（不含觸發骰：${nonTriggerSum}）</span>`;
    }
    totalSummary.innerHTML = sumHtml;
    totalSummary.classList.remove('hidden');
} else {
    totalSummary.classList.add('hidden');
}