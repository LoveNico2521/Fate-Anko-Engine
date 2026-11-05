          let sides = 100;
          if (boostMode100 === 'v1') {
            sides = Math.max(1, 100 - boost);
          } else if (boostMode100 === 'v3') {
            sides = Math.max(1, 100 - Math.abs(boost));
          }
          
          const raw100 = getRnd(sides, debugSeq, state);
          const final100 = raw100 + boost;
          
          let isCS = (final100 >= 96);
          let isCF = false;

          if (boostMode100 === 'v1' || boostMode100 === 'v2') {
            isCF = (raw100 <= 5);
          } else if (boostMode100 === 'v3') {
            isCF = (final100 <= 5);
          }