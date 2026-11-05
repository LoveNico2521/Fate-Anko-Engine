let csvContent = "\uFEFF時間,摘要,詳細骰子\n";
...
const safeSummary = `"${(item.summary || item.text || '').replace(/"/g, '""')}"`;
const safeDetail = `"${(item.detail || '').replace(/"/g, '""')}"`;
csvContent += `${item.time},${safeSummary},${safeDetail}\n`;