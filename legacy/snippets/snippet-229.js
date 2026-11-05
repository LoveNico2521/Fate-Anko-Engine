@keyframes soft-drop {
  0% { transform: translateY(-10px) scale(0.98); opacity: 0.4; }
  60% { transform: translateY(2px) scale(1.01); opacity: 0.9; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.animate-roll { animation: soft-drop 0.25s ease-out; }