if (e.code === 'Space' || e.key === 'Enter') {
  e.preventDefault(); 
  executeRoll('1d100');
}