    function exportHistoryToCSV() {
      if (!Array.isArray(history) || history.length === 0) {
        alert("菲特表示：目前沒有織夢紀錄可以匯出喵！");
        return;
      }
      
      let csvContent = "\uFEFF時間,摘要,詳細骰子軌跡\n";
      const reversedHistory = [...history].reverse();
      
      reversedHistory.forEach(item => {
        const sText = item.summary || item.text || '';
        const dText = item.detail || '';
        const safeSummary = `"${sText.replace(/"/g, '""')}"`;
        const safeDetail = `"${dText.replace(/"/g, '""')}"`;
        csvContent += `${item.time},${safeSummary},${safeDetail}\n`;
      });

      const defaultFileName = `Fate_DreamWeaver_Log_${new Date().toISOString().slice(0,10)}.csv`;

      // === 新增：判斷是否在 Pywebview EXE 環境中 ===
      if (window.pywebview && window.pywebview.api) {
        // 透過 Python 原生存檔視窗
        window.pywebview.api.save_csv(csvContent, defaultFileName).then((response) => {
          if (response && response.success) {
            // 存檔成功，不吵鬧
          } else if (response && response.canceled) {
            // 使用者取消存檔
          } else {
            alert("存檔失敗了喵：" + (response ? response.error : "未知錯誤"));
          }
        });
      } else {
        // 普通瀏覽器環境：維持原本的 Blob 下載
        try {
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", defaultFileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (e) {
          console.error('[Fate] CSV 匯出失敗', e);
          alert("匯出失敗了喵，可能是瀏覽器限制。");
        }
      }
    }