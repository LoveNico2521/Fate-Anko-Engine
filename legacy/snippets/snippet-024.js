let csvContent = "\uFEFF時間,安科織夢紀錄\n";
const reversedHistory = [...history].reverse();

reversedHistory.forEach(item => {
  const safeText = `"${item.text.replace(/"/g, '""')}"`;
  csvContent += `${item.time},${safeText}\n`;
});