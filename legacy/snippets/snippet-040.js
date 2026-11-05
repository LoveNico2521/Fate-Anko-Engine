document.addEventListener('keydown', function(e) {
  // 跳过输入字段、文本区域、下拉菜单和按钮
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON' || e.target.isContentEditable) return;
  
  if (e.code === 'Space' || e.key === 'Enter') {
    e.preventDefault(); 
    executeRoll('1d100');
  } else if (e.key === '1') {
    executeRoll('1d10');
  } else if (e.key === '2') {
    executeRoll('1d100');
  }
});