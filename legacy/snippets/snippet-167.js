// 在 totalSummary.innerHTML 中加上点击事件或 cursor-pointer
let sumHtml = `🧮 本輪總和：<span class="...">...</span> = <span class="cursor-pointer hover:text-amber-300 transition-colors" title="點擊複製總和" onclick="copyTotalSum(${totalSum})">${totalSum}</span>`;

function copyTotalSum(val) {
    navigator.clipboard.writeText(val.toString()).then(() => {
        showToast(`📋 已複製總和：${val} 喵！`, 'success');
    }).catch(() => {
        // fallback
    });
}