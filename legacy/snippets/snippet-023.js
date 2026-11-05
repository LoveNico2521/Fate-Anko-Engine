historyLog.innerHTML = history.map(item => `
    <div class="flex justify-between items-center py-1.5 border-b border-slate-800/60 last:border-0 gap-2">
      <span class="text-slate-300 text-[11px] md:text-xs leading-tight break-all">${item.text}</span>
      <span class="text-[10px] text-slate-500 shrink-0">${item.time}</span>
    </div>
  `).join('');