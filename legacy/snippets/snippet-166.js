let glowClass = '';
if (s.outcome === '大成功') glowClass = 'glow-cs';
else if (s.outcome === '大失敗') glowClass = 'glow-cf';
else if (s.levelStr && parseInt(s.levelStr.replace('s', '')) >= 3) glowClass = 'glow-s3';

// 在 flowHtml 中加入 ${glowClass}