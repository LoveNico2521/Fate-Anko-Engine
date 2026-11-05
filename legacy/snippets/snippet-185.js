if (dieType === '1d100') {
    let raw100;
    let sides = 100;
    if (boostMode100 === 'v1' || boostMode100 === 'v3') {
        sides = Math.max(1, 100 - boost);
    }
    raw100 = getRnd(sides, debugSeq, state);
    const final100 = raw100 + boost;
    
    let isCS = final100 >= 96;
    let isCF = false;
    
    if (boostMode100 === 'v1' || boostMode100 === 'v2') {
        isCF = raw100 <= 5;
    }
    
    let isSuccess = (mode === 'ra') ? (final100 <= targetVal) : (final100 >= targetVal);
    let checkDetail = `[${mode.toUpperCase()} ${mode === 'ra' ? '<=' : '>='} ${targetVal}] ➔ ${isSuccess ? '✅ 成功' : '❌ 失敗'}`;

    let step = { levelStr, type: '1d100', raw: raw100, final: final100, extraD2: null, outcome: null, msg: '', checkDetail };

    if (isCF) {
        step.outcome = 'DF-Trigger'; // Or CF? The original code uses DF-Trigger for 1~5.
        currentLevel++;
        step.msg = `🎲 1d100 = ${raw100} (CF 1~5) ➔ 進入 s${currentLevel} (1d10)！ (${checkDetail})`;
        steps.push(step);
        continueLoop = true;
    } else if (isCS) {
        const currentOutcome = '大成功';
        if (!initialChainOutcome) initialChainOutcome = currentOutcome;
        currentStack++;
        step.outcome = currentOutcome;
        currentLevel++;
        step.msg = `✨ 1d100 = ${raw100} (CS >=96) ➔ 進入 s${currentLevel} (1d10)！ | ${checkDetail}`;
        steps.push(step);
        continueLoop = true;
    } else {
        step.msg = `1d100 結果: ${raw100} | ${checkDetail}`;
        steps.push(step);
        continueLoop = false;
    }
}