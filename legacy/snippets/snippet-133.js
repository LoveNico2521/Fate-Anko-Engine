function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `px-4 py-2 rounded-xl text-sm font-bold shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 ${
        type === 'error' ? 'bg-rose-600 text-white' :
        type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-100'
    }`;
    toast.innerText = msg;
    container.appendChild(toast);
    // 动画进入
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}