let totalSum = 0;
let formulaParts = [];
let hasChain = false;

allRuns.forEach(run => {
    const initialStep = run.steps[0];
    // 如果 run.steps.length > 1，说明有连锁
    if (run.steps.length > 1) hasChain = true;
    
    // 假设我们想对初始骰子求和。我们应该排除它们吗？
    // 用户说“9+2=11”，这意味着排除触发骰子。
    // 或者“9+2+10=21”，这意味着包含触发骰子但高亮显示。
});