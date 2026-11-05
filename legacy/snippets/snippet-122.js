<details class="bg-fuchsia-950/20 border border-fuchsia-500/30 rounded-xl p-3 text-xs">
  <summary class="cursor-pointer font-bold text-fuchsia-400 select-none flex justify-between items-center">
    <span>🧪 測試序列 (Debug)</span>
    <span class="text-[9px] text-fuchsia-600 font-normal">點擊展開</span>
  </summary>
  <div class="mt-2 space-y-1">
    <div class="flex justify-between items-center mb-1">
      <span class="text-[10px] text-fuchsia-300/60">輸入逗號分隔的數字</span>
      <button type="button" onclick="event.preventDefault(); document.getElementById('debug-seq').value='';" class="text-[10px] text-fuchsia-300/60 hover:text-fuchsia-300 underline">清除</button>
    </div>
    <input id="debug-seq" type="text" placeholder="例: 96, 10, 1, 50" class="w-full bg-slate-900/80 border border-fuchsia-500/30 rounded px-2 py-1.5 text-fuchsia-200 focus:outline-none focus:border-fuchsia-500/60 font-mono placeholder-fuchsia-900/50" />
    <p class="text-[9px] text-fuchsia-400/60 leading-tight mt-1">將依序取代隨機結果。用完後回歸隨機。</p>
  </div>
</details>