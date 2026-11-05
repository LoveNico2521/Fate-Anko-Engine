let sumHtml = `🧮 總和：<span class="font-mono text-slate-400 mx-2">${formulaParts.join(' + ')}</span> = <span class="text-amber-400 text-lg md:text-xl ml-1">${totalSum}</span>`;
if (triggerSum > 0) { // 或者如果有任何触发器
    sumHtml += `<span class="ml-3 text-xs text-slate-500 font-normal">（不含觸發骰：${nonTriggerSum}）</span>`;
}
totalSummary.innerHTML = sumHtml;