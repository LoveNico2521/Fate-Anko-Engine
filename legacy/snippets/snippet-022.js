document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  
  if (e.code === 'Space' || e.key === 'Enter') {
    e.preventDefault(); 
    executeRoll('1d100');
  }
  ...
});