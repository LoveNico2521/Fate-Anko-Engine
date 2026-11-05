        let stepStrArr = run.steps.map(s => {
          let str = `${s.levelStr}:${s.type}=${s.raw}`;
          if (s.extraD2) str += `(1d2=${s.extraD2})`;
          if (s.outcome === '大成功') str += '✨';
          if (s.outcome === '大失敗') str += '💥';
          if (s.outcome === 'DF-Trigger') str += '🎲';
          return str;
        });
        let runStr = stepStrArr.join('→');
        if (run.steps.length > 1) {
            runStr = `[觸發]${runStr}`;
        }
        if (count > 1) runStr = `[${idx + 1}] ${runStr}`;
        detailArr.push(runStr);