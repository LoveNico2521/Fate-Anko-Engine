historyLog.innerHTML = history.map(item => `
  <div class="flex flex-col py-1.5 border-b border-slate-800/60 last:border-0 gap-0.5">
    <div class="flex justify-between items-center gap-2">
      <span class="text-slate-300 text-[11px] md:text-xs font-bold leading-tight break-all">${item.summary || item.text}</span>
      <span class="text-[10px] text-slate-500 shrink-0">${item.time}</span>
    </div>
    ${item.detail ? `<span class="text-[10px] text-slate-400 font-mono leading-tight break-all pl-2 border-l-2 border-slate-700">${item.detail}</span>` : ''}
  </div>
`).join('');