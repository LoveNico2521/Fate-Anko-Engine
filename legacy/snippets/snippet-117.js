      const boostText = boost !== 0 ? ` (B:${boost >= 0 ? '+' : ''}${boost})` : '';
      const sumText = totalSummary.classList.contains('hidden') ? '' : ` ｜ 總和: ${totalSum}`;
      const summaryText = `${count}x ${type}${boostText} [${checkMode.toUpperCase()}:${targetVal}] ➔ 淨計: ${totalSuccessStacks}成功 / ${totalFailStacks}失敗${sumText}`;