      // === 計算總和 ===
      let totalSum = 0;
      let nonTriggerSum = 0;
      let formulaParts = [];
      let hasTrigger = false;

      allRuns.forEach(run => {
        const initialStep = run.steps[0];
        const isTrigger = run.steps.length > 1;
        
        totalSum += initialStep.final;
        if (isTrigger) {
          hasTrigger = true;
        } else {
          nonTriggerSum += initialStep.final;
        }
        
        let partStr = '';
        if (boost !== 0) {
          const boostStr = boost > 0 ? `+${boost}` : `${boost}`;
          partStr = `(${initialStep.raw}${boostStr})`;
        } else {
          partStr = `${initialStep.raw}`;
        }
        
        if (isTrigger) {
          partStr = `<span class="text-amber-400 font-bold" title="觸發連鎖">${partStr}</span>`; 
        }
        formulaParts.push(partStr);
      });

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