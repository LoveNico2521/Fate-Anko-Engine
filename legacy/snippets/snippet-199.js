        if (dieType === '1d100') {
          let sides = 100;
          if (boostMode100 === 'v1') {
            sides = Math.max(1, 100 - boost);
          } else if (boostMode100 === 'v3') {
            sides = Math.max(1, 100 - Math.abs(boost));
          }
          
          const raw100 = getRnd(sides, debugSeq, state);
          const final100 = raw100 + boost;
          
          let isSuccess = (mode === 'ra') ? (final100 <= targetVal) : (final100 >= targetVal);
          let checkDetail = `[${mode.toUpperCase()} ${mode === 'ra' ? '<=' : '>='} ${targetVal}] ➔ ${isSuccess ? '✅ 成功' : '❌ 失敗'}`;

          let step = { levelStr, type: '1d100', raw: raw100, final: final100, extraD2: null, outcome: null, msg: '', checkDetail };

          let isCF = false;
          if (boostMode100 === 'v1' || boostMode100 === 'v2') {
            isCF = (raw100 <= 5);
          } else if (boostMode100 === 'v3') {
            isCF = (final100 <= 5);
          }
          
          let isCS = (final100 >= 96);

          if (isCS) {
            // ...
          } else if (isCF) {
            // ...
          } else {
            // ...
          }