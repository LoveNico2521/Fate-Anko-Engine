let count = Number(countInput.value) || 1;
count = Math.max(1, Math.min(20, count));
countInput.value = count;