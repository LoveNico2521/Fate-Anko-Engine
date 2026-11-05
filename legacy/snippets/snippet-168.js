      // 自動複製邏輯
      if (document.getElementById('auto-copy-toggle').checked) {
        const parts = allRuns.map(run => {
          const step = run.steps[0];
          const b = boost;
          return b !== 0 ? `(${step.raw}${b > 0 ? '+' : ''}${b})` : `(${step.raw})`;
        });
        const prefix = count + 'd' + (type.includes('d') ? type.split('d')[1] : type);
        const formulaString = `${prefix}=${parts.join('+')}=(${totalSum})`;
        
        navigator.clipboard.writeText(formulaString).then(() => {
          showToast(`📋 已自動複製：${formulaString}`, 'success');
        }).catch(() => {
          try {
            const textArea = document.createElement("textarea");
            textArea.value = formulaString;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            showToast(`📋 已自動複製：${formulaString}`, 'success');
          } catch (e) {
            showToast('❌ 複製失敗了喵...', 'error');
          }
        });
      }