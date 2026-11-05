        if (dieType === '1d100') {
          let sides = 100;
          if (boostMode100 === 'v1') {
            sides = Math.max(1, 100 - boost); // Wait, v1 is 100-Boost. If boost is negative, 100 - (-10) = 110. This is correct.
          } else if (boostMode100 === 'v3') {
            sides = Math.max(1, 100 - Math.abs(boost)); // v3 is 100 - |Boost|
          }
          const raw100 = getRnd(sides, debugSeq, state);
          const final100 = raw100 + boost;
          
          let isCS = (final100 >= 96);
          let isCF = false;
          if (boostMode100 === 'v1') {
             isCF = (raw100 <= 5);
          } else if (boostMode100 === 'v2') {
             isCF = (raw100 <= 5);
          } else if (boostMode100 === 'v3') {
             isCF = (final100 <= 5);
          }

          // Then check if CS or CF.
          // ...