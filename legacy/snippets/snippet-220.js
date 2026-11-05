@keyframes spin-bounce {
  0% { transform: scale(0.5) rotate(0deg); opacity: 0; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
}
@keyframes pop-in {
  0% { transform: translateY(10px) scale(0.95); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.animate-pop-in {
  animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 0; /* Start hidden */
}
.rolling-overlay {
  position: fixed; inset: 0; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(4px); z-index: 50;
  display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.2s;
}
.rolling-overlay.active { opacity: 1; pointer-events: auto; }
.rolling-dice { font-size: 5rem; animation: spin-bounce 0.6s infinite alternate; }