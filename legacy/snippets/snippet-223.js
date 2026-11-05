function executeRoll(type) {
    // 快速动画反馈
    playAnimation();

    // 计算和渲染逻辑（完全同步，无延迟）
    let count = Number(countInput.value) || 1;
    // ... 其他变量的获取 ...
    // ... 掷骰循环 ...
    renderBadges(...);
    renderFlow(...);
    const totalSum = renderTotalSum(...);

    // ... 详情文本 ...
    addHistory(...);
    // ... 自动复制 ...
}