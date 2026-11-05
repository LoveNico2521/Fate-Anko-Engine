function rollRandom(max, debugSeq, state) {
    if (debugSeq && debugSeq.length > 0) {
        if (state.debugIndex < debugSeq.length) {
            let val = debugSeq[state.debugIndex++];
            if (val > max) val = max; // 防呆
            if (val < 1) val = 1;    // 防呆
            return val;
        }
    }
    return Math.floor(Math.random() * max) + 1;
}