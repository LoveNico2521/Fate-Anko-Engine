function executeRoll(type) {
  // ... prevent double click ...
  const overlay = document.getElementById('rolling-overlay');
  overlay.classList.add('active');

  // Calculate results here (so it's ready) or wait? Let's calculate instantly, but delay rendering.
  // ... (current calculation logic) ...

  setTimeout(() => {
    // ... (current rendering logic: renderBadges, renderFlow, etc.) ...
    overlay.classList.remove('active');

    // apply stagger to cards
    const cards = document.querySelectorAll('.result-card');
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.05}s`;
      card.classList.add('animate-pop-in');
    });
  }, 800); // 800ms for animation
}