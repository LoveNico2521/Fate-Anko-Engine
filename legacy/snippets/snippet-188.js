  let isCF = false;
  if (boostMode100 === 'v1' || boostMode100 === 'v2') {
    isCF = raw100 <= 5;
  }
  let isCS = final100 >= 96;