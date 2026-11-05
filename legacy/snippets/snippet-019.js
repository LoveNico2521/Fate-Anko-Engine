function exportHistoryToCSV() {
  if (history.length === 0) {
    alert("目前沒有歷史紀錄可以匯出喵！");
    return;
  }
  // 加上 \uFEFF 讓 Excel 正確辨識 UTF-8 中文
  let csvContent = "\uFEFF時間,擲骰紀錄\n";
  // 因為 history 是 unshift 加到最前面，匯出的時候反轉回來，讓時間順序是由舊到新
  const reversedHistory = [...history].reverse();
  reversedHistory.forEach(item => {
    // 避免逗號造成 CSV 格式跑掉，把內容用雙引號包起來
    const safeText = `"${item.text.replace(/"/g, '""')}"`;
    csvContent += `${item.time},${safeText}\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `TRPG_Roll_History_${new Date().getTime()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}