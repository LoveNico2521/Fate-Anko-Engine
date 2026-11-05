function copyHistoryToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('已複製到剪貼簿喵！', 'success');
    }).catch(() => {
        showToast('複製失敗喵...', 'error');
    });
}